import Filters from '../filters/Filters';
import ProductList from '../product-list/ProductList';
import style from './style.module.scss';

interface ShopContentProps {}

const ShopContent: React.FC<ShopContentProps> = () => {
  return (
    <section className={style.content} id="content">
      <Filters />
      <ProductList />
    </section>
  );
};

export default ShopContent;
