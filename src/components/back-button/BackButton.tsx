import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/back-icon.svg';
import blueBackIcon from '../../assets/images/blue-back-icon.svg';
import style from './style.module.scss';

interface BackButtonProps {}

const BackButton: React.FC<BackButtonProps> = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      className={style.backButton}
      onClick={() => navigate(-1)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img src={hover ? blueBackIcon : backIcon} alt="Back" />
    </button>
  );
};

export default BackButton;
