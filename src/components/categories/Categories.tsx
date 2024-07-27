import backpackIcon from '../../assets/images/category-icons/backpack.svg';
import sneakerIcon from '../../assets/images/category-icons/sneaker.svg';
import clothesIcon from '../../assets/images/category-icons/clothes.svg';
import clockIcon from '../../assets/images/category-icons/clock.svg';
import style from './style.module.scss';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <section className={style.categories}>
      <div className={style.category}>
        <div>
          <img src={backpackIcon} alt="Backpack" id="1" />
        </div>
      </div>
      <div className={style.category}>
        <div>
          <img src={sneakerIcon} alt="Sneakers" id="2" />
        </div>
      </div>
      <div className={style.category}>
        <div>
          <img src={clothesIcon} alt="Clothes" id="3" />
        </div>
      </div>
      <div className={style.category}>
        <div>
          <img src={clockIcon} alt="Clock" id="4" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
