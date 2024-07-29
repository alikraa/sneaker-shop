import BackButton from '../back-button/BackButton';
import ProductItem from '../product-list/ProductItem';
import { productList } from '../../ts/data';
import sneakerImg from '../../assets/images/sneaker.jpg';
import style from './style.module.scss';

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <section className={style.favoritesWrapper}>
      <BackButton />
      <div className={style.favorites}>
        {productList.map((item) => (
          <ProductItem key={item.id} item={item} imgSrc={sneakerImg} />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
