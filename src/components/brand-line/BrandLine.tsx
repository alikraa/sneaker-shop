import adidasIcon from '../../assets/images/brand-icons/adidas-icon.svg';
import jordanIcon from '../../assets/images/brand-icons/jordan-icon.svg';
import nikeIcon from '../../assets/images/brand-icons/nike-icon.svg';
import poizonIcon from '../../assets/images/brand-icons/poizon-icon.svg';
import pumaIcon from '../../assets/images/brand-icons/puma-icon.svg';
import style from './style.module.scss';

interface BrandLineProps {}

const BrandLine: React.FC<BrandLineProps> = () => {
  return (
    <section className={style.brandLine}>
      <ul>
        <li>
          <img src={adidasIcon} alt="Adidas" />
        </li>
        <li>
          <img src={jordanIcon} alt="Jordan" />
        </li>
        <li>
          <img src={nikeIcon} alt="Nike" />
        </li>
        <li>
          <img src={poizonIcon} alt="Poizon" />
        </li>
        <li>
          <img src={pumaIcon} alt="Puma" />
        </li>
      </ul>

      <ul aria-hidden="true">
        <li>
          <img src={adidasIcon} alt="Adidas" />
        </li>
        <li>
          <img src={jordanIcon} alt="Jordan" />
        </li>
        <li>
          <img src={nikeIcon} alt="Nike" />
        </li>
        <li>
          <img src={poizonIcon} alt="Poizon" />
        </li>
        <li>
          <img src={pumaIcon} alt="Puma" />
        </li>
      </ul>
    </section>
  );
};

export default BrandLine;
