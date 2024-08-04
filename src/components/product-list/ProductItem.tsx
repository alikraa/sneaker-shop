import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Item } from '../../ts/types';
import heartIcon from '../../assets/images/header-icons/heart-icon.svg';
import redHeartIcon from '../../assets/images/header-icons/red-heart-icon.svg';
import style from './style.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { addToFavorites } from '../../redux/shop-slice';

interface ProductItemProps {
  item: Item;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const { spuId, title, logoUrl } = item.data.detail;
  const { price } = item.data.price.item;

  const dispatch = useAppDispatch();

  const [favorite, setFavorite] = useState(false);
  const isFavorites = favorite ? redHeartIcon : heartIcon;

  const location = useLocation();
  const favoritesPage = location.pathname === '/' ? isFavorites : redHeartIcon;

  return (
    <div className={style.productListItem} id={String(spuId)}>
      <img
        src={favoritesPage}
        alt="Add to Favorites"
        title="Добавить в избранное"
        className={style.favorites}
        onClick={() => {
          setFavorite(!favorite);
          dispatch(addToFavorites(item));
        }}
      />
      <Link
        to={`/product-list/${spuId}`}
        style={{ textDecoration: 'none', color: '#000', alignSelf: 'center' }}
      >
        <div className={style.productItemImgwrapper}>
          <img src={logoUrl} alt="Poduct" />
        </div>
      </Link>
      <h3>{title}</h3>
      <p>{price}</p>
      <button>добавить в корзину</button>
    </div>
  );
};

export default ProductItem;
