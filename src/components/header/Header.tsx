import logo from '../../assets/images/header-icons/logo.svg';
import searchIcon from '../../assets/images/header-icons/search-icon.svg';
import userIcon from '../../assets/images/header-icons/user-icon.svg';
import heartIcon from '../../assets/images/header-icons/heart-icon.svg';
import shoppingCartIcon from '../../assets/images/header-icons/shopping-cart-icon.svg';
import cover from '../../assets/images/cover.jpg';
import style from './style.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className={style.headerTop}>
        <div className={style.headerTopLogo}>
          <img src={logo} alt="Logo" />
          <h1>RunRun Store</h1>
        </div>
        <form className={style.headerTopForm}>
          <img src={searchIcon} alt="Search Icon" />
          <input type="text" />
          <button>искать</button>
        </form>

        <ul className={style.personalData}>
          <li>
            <img src={userIcon} alt="User" className={style.userIcon} />
          </li>
          <li>
            <img
              src={heartIcon}
              alt="Favorites"
              className={style.favoritesIcon}
            />
          </li>
          <li>
            <img src={shoppingCartIcon} alt="Cart" className={style.cartIcon} />
          </li>
        </ul>
      </div>

      <hr />

      <div className={style.headerContent}>
        <div className={style.headerContentCover}>
          <div className="cover-block">
            <p>
              Мы помогаем Вам привезти одежду и аксессуары как можно быстрее с
              китайских площадок: Nike, Adidas, Poizon и других (с какой
              площадки, какой товар Вы можете узнать благодаря информационным
              стикерам)
            </p>
            <button className="cover-btn">
              <a href="#content">за покупками</a>
            </button>
          </div>
          <img src={cover} alt="Cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
