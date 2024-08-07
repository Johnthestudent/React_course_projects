import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

/*createcontext */
const GithubContext = React.createContext();

//Provider, Consumer - GithubContext.Provider

//separate component
const GithubProvider = ({children}) =>{
    //user state value
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);

    //request loading
    const [requests, setRequests] = useState(0);
    //loading
    const [loading, setIsLoading] = useState(false);

    //errors
    const [error, setError] = useState({show:false,msg:""});

    //search
    const searchGithubUser = async(user) =>{
        //search for the user
        toggleError()
        // setLoading(true)
        const response = await axios(`${rootUrl}/users/${user}`).catch(err => console.log(err));
        if(response){
            setGithubUser(response.data);
        }
        else
        {
            toggleError(true,'there is no user with that username');
        }
    };

    //check rate
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`).then(({data})=>{
            //destructure
            let {
                rate:{remaining},
            } = data;
            setRequests(remaining)
            if(remaining === 0){
                //throw an error, there are no requests
                toggleError(true,'Sorry, you have exceeded your hourly rate limit!')
            }
        }).catch((err)=>console.log(err));
    }
    
    function toggleError(show = false,msg = ''){
        setError({show,msg});
    }
    //error
    //no user
    
    //no requests
    useEffect(
        checkRequests, []);
    return (<GithubContext.Provider value={{githubUser,repos,followers,requests, error, searchGithubUser}}>
        {children}
    </GithubContext.Provider>
    );
};

export {GithubProvider, GithubContext}