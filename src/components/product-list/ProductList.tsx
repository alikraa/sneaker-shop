import sneakerImg from '../../assets/images/sneaker.jpg';
import style from './style.module.scss';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <div className={style.productList}>
      <div className={style.productListItem}>
        <img src={sneakerImg} alt="Poduct" />
        <h3>name</h3>
        <p>price</p>
        <button>добавить в корзину</button>
      </div>
      <div className={style.productListItem}>
        <img src={sneakerImg} alt="Poduct" />
        <h3>name</h3>
        <p>price</p>
        <button>добавить в корзину</button>
      </div>
      <div className={style.productListItem}>
        <img src={sneakerImg} alt="Poduct" />
        <h3>name</h3>
        <p>price</p>
        <button>добавить в корзину</button>
      </div>
      <div className={style.productListItem}>
        <img src={sneakerImg} alt="Poduct" />
        <h3>name</h3>
        <p>price</p>
        <button>добавить в корзину</button>
      </div>
      <div className={style.productListItem}>
        <img src={sneakerImg} alt="Poduct" />
        <h3>name</h3>
        <p>price</p>
        <button>добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductList;
