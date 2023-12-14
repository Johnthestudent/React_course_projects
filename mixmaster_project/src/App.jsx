import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//universal index.js import
import { 
  About, 
  HomeLayout, 
  Landing, 
  Error, 
  Newsletter, 
  Cocktail, 
  SinglePageError
} from './pages';

//loader
import { loader as landingLoader } from "./pages/Landing";
import {action as newsletterAction} from './pages/Newsletter';

//definining the refreshing of the page
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path:'/',
    //anything can go for element, even components
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children:[
      {
        index: true,
        //path:'/landing',
        element: <Landing/>,
        errorElement: <SinglePageError/>,
        loader: landingLoader(queryClient),
      },
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path:'/newsletter',
        element: <Newsletter/>,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path:'/about',
        element: <About/>,
      },
    ],
  },
]);

//query wrapping
const App = () => {
  //Grab the component
  return (  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
  );
};
export default App;
