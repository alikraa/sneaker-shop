import sneakerImg from '../../assets/images/sneaker.jpg';
import style from './style.module.scss';

interface CartItemProps {}

const CartItem: React.FC<CartItemProps> = () => {
  return (
    <div className={style.cartItem}>
      <div className={style.cartItemMain}>
        <img src={sneakerImg} alt="Sneaker" />
        <div className={style.cartItemDescription}>
          <h3>name</h3>
          <p>desc</p>
        </div>
      </div>

      <div className={style.cartItemCounter}>
        <button>–</button>
        <input type="number" min={1} max={99} />
        <button>+</button>
      </div>

      <div className={style.cartItemPrice}>
        <p>price</p>
        <button title="Удалить из корзины">x</button>
      </div>
    </div>
  );
};

export default CartItem;
