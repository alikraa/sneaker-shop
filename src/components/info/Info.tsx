import cover from '../../assets/images/cover.jpg';
import style from './style.module.scss';

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  return (
    <div className={style.infoContent}>
      <div className={style.infoContentCover}>
        <div>
          <p>
            Мы помогаем Вам привезти одежду и аксессуары как можно быстрее с
            китайских площадок: Nike, Adidas, Poizon и других (с какой площадки,
            какой товар Вы можете узнать благодаря информационным стикерам)
          </p>
          <button>
            <a href="#content">за покупками</a>
          </button>
        </div>
        <img src={cover} alt="Cover" />
      </div>
    </div>
  );
};

export default Info;
