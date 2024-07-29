import { Link, useLocation } from 'react-router-dom';
import Info from '../info/Info';
import logo from '../../assets/images/header-icons/logo.svg';
import searchIcon from '../../assets/images/header-icons/search-icon.svg';
import userIcon from '../../assets/images/header-icons/user-icon.svg';
import heartIcon from '../../assets/images/header-icons/heart-icon.svg';
import shoppingCartIcon from '../../assets/images/header-icons/shopping-cart-icon.svg';
import style from './style.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();

  return (
    <header>
      <div className={style.headerTop}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <div className={style.headerTopLogo}>
            <img src={logo} alt="Logo" />
            <h1>RunRun Store</h1>
          </div>
        </Link>

        <form className={style.headerTopForm}>
          <img src={searchIcon} alt="Search Icon" />
          <input type="text" />
          <button>искать</button>
        </form>

        <ul className={style.personalData}>
          <li>
            <img
              src={userIcon}
              alt="User"
              className={style.userIcon}
              title="Профиль"
            />
          </li>
          <Link to={'/favorites'} style={{ textDecoration: 'none' }}>
            <li>
              <img
                src={heartIcon}
                alt="Favorites"
                className={style.favoritesIcon}
                title="Добавить в избранное"
              />
            </li>
          </Link>
          <Link to={'/cart'} style={{ textDecoration: 'none' }}>
            <li>
              <img
                src={shoppingCartIcon}
                alt="Cart"
                className={style.cartIcon}
                title="Корзина"
              />
              <span>3</span>
            </li>
          </Link>
        </ul>
      </div>

      <hr />
      {location.pathname === '/' ? <Info /> : ''}
    </header>
  );
};

export default Header;
