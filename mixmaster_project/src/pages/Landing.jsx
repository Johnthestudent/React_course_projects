import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import CocktailList from '../components/CocktailList';
import SearchForm from "../components/SearchForm";
import { useQuery } from '@tanstack/react-query';
//url for the api
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//quick query for searching a single cocktail out of the list  
const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

  export const loader = 
  (queryClient) =>
   async ({request}) => {
    const url = new URL(request.url);
    //asking for the api
    //const searchTerm = 'margarita';
    const searchTerm = url.searchParams.get('search') || '';
    //response (structured url)
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    //const response = await axios .get(`${cocktailSearchUrl}${searchTerm}`); 
    //return 'something';
    return {/*drinks: response.data.drinks,*/searchTerm};
};

const Landing = () => {
  const { searchTerm /*drinks*/ } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;