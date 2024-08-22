import { fetchFeaturedProducts } from '@/app/utils/actions';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';

//little set of products
async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;