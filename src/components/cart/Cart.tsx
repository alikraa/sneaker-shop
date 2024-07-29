import BackButton from '../back-button/BackButton';
import CartItem from './CartItem';
import style from './style.module.scss';

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  return (
    <section className={style.cartWrapper}>
      <BackButton />
      <div className={style.cart}>
        <CartItem />
        <hr />
        <CartItem />
        <hr />
        <CartItem />
        <hr />
      </div>
    </section>
  );
};

export default Cart;
