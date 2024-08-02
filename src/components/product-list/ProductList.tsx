import ProductItem from './ProductItem';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import style from './style.module.scss';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const { productList, searchValue } = useAppSelector(
    (state: RootState) => state.shopData
  );

  return (
    <div className={style.productList}>
      {productList
        .filter((item) =>
          item.data.detail.title.toLowerCase().includes(searchValue)
        )
        .map((item) => (
          <ProductItem key={item.data.detail.spuId} item={item} />
        ))}
    </div>
  );
};

export default ProductList;
