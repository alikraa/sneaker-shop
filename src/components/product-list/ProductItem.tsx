import { Link } from 'react-router-dom';
import { Item } from '../../ts/types';
import heartIcon from '../../assets/images/header-icons/heart-icon.svg';
import style from './style.module.scss';

interface ProductItemProps {
  item: Item;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const { spuId, title, logoUrl } = item.data.detail;
  const { price } = item.data.price.item;
  return (
    <Link
      to={`/product-list/${spuId}`}
      style={{ textDecoration: 'none', color: '#000' }}
    >
      <div className={style.productListItem} id={String(spuId)}>
        <img
          src={heartIcon}
          alt="Add to Favorites"
          title="Добавить в избранное"
          className={style.favorites}
        />
        <img src={logoUrl} alt="Poduct" className={style.productItemImg} />
        <h3>{title}</h3>
        <p>{price}</p>
        <button>добавить в корзину</button>
      </div>
    </Link>
  );
};

export default ProductItem;
