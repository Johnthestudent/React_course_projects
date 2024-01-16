import {Hero, FeaturedProducts} from "../components";

//fetching request data
import { customFetch } from '../utils';
const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

//data loader
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return <>
    <Hero/>
    <FeaturedProducts/>
  </>;
};
export default Landing;