import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';
//total number of products in the cart and their price
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Subtotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
          <span>Tax</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        {/* Order Total */}
        <p className='mt-4 flex justify-between text-sm  pb-2'>
          <span>Order Total</span>
          <span className='font-medium'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;