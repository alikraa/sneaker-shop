import telegramIcon from '../../assets/images/footer-icons/telegram-icon.svg';
import './style.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <h3>подписывайся на наш телеграм-канал</h3>
      <a href="#">
        <img src={telegramIcon} alt="Telegram" />
      </a>
    </footer>
  );
};

export default Footer;
