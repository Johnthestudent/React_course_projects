import { Outlet, useNavigation} from 'react-router-dom';
import Navbar from '../components/Navbar';
//import { useNavigation } from 'react-router-dom';
//import SearchForm from '../components/SearchForm';
//import CocktailCard from '../components/CocktailCard';

const HomeLayout = () => {
  const navigation = useNavigation();
  
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value';
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div className='loading' />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
      {/*<SearchForm/>*/}
    </>
  );
};
export default HomeLayout;