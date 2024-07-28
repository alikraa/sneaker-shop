import ProductItem from './ProductItem';
import sneakerImg from '../../assets/images/sneaker.jpg';
import { productList } from '../../ts/data';
import style from './style.module.scss';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <div className={style.productList}>
      {productList.map((item) => (
        <ProductItem key={item.id} item={item} imgSrc={sneakerImg} />
      ))}
    </div>
  );
};

export default ProductList;
