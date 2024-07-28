import { Link } from 'react-router-dom';
import style from './style.module.scss';

interface ProductItemProps {
  item: {
    id: number;
    name: string;
    price: string;
  };
  imgSrc: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ item, imgSrc }) => {
  const { id, name, price } = item;
  return (
    <Link
      to={`/product-list/${id}`}
      style={{ textDecoration: 'none', color: '#000' }}
    >
      <div className={style.productListItem} id={String(id)}>
        <img src={imgSrc} alt="Poduct" />
        <h3>{name}</h3>
        <p>{price}</p>
        <button>добавить в корзину</button>
      </div>
    </Link>
  );
};

export default ProductItem;
