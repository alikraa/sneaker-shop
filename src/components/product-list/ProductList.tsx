import ProductItem from './ProductItem';
// import sneakerImg from '../../assets/images/sneaker.jpg';
// import { productList } from '../../ts/data';
import database from '../../database.json';
import style from './style.module.scss';

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  console.log(database.map((item) => item.data.detail));

  return (
    <div className={style.productList}>
      {database.map((item) => (
        <ProductItem key={item.data.detail.spuId} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
