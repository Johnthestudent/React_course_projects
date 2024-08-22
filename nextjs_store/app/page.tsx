//importing shadcn component
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { Button } from '@/components/ui/button';
import Hero from '@/components/home/Hero';

function HomePage() {
  return (
    <div>
      {/*/<h1 className='text-3xl'>HomePage</h1>
      <Button variant='outline' size='lg' className='capitalize m-8'>
        Click me
      </Button>*/}
       <>
        <Hero/>
        <FeaturedProducts/>
       </>
    </div>
  );
}
export default HomePage;