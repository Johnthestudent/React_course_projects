import ShareButton from '@/components/single-product/ShareButton';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import SubmitReview from '@/components/reviews/SubmitReview';
import ProductReviews from '@/components/reviews/ProductReviews';
import { fetchSingleProduct, findExistingReview } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';

async function SingleProductPage({ params }: { params: { id: string } }) {
  const { userId } = auth();
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  return (
    <>
      <ProductReviews productId={params.id} />
      {reviewDoesNotExist && <SubmitReview productId={params.id} />}
    </>
  );
}