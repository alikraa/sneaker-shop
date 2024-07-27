import BrandLine from '../brand-line/BrandLine';
import Categories from '../categories/Categories';
import ShopContent from '../shop-content/ShopContent';

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <main>
      <Categories />
      <BrandLine />
      <ShopContent />
    </main>
  );
};

export default MainContent;
