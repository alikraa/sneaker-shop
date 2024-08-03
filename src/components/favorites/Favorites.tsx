import BackButton from '../back-button/BackButton';
import ProductItem from '../product-list/ProductItem';
// import { productList } from '../../ts/data';
// import sneakerImg from '../../assets/images/sneaker.jpg';
import style from './style.module.scss';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
    const { productList, searchValue } = useAppSelector(
    (state: RootState) => state.shopData
  );
  
  return (
    <section className={style.favoritesWrapper}>
      <BackButton />
      <div className={style.favorites}>
      {productList
        .filter((item) =>
          item.data.detail.title.toLowerCase().includes(searchValue)
        )
        .map((item) => (
          <ProductItem key={item.data.detail.spuId} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
