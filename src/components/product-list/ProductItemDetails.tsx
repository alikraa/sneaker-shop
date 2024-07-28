import { useState } from 'react';
import sneakerImg from '../../assets/images/sneaker.jpg';
import sneakerIcon from '../../assets/images/category-icons/sneaker.svg';
import style from './style.module.scss';

interface ProductItemDetailsProps {}

const ProductItemDetails: React.FC<ProductItemDetailsProps> = () => {
  const [currentImg, setCurrentImg] = useState(sneakerImg);

  return (
    <div className={style.productItemDetails}>
      <div className={style.productItemDetailsImages}>
        <div
          className={style.gallery}
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            setCurrentImg((event.target as HTMLImageElement).src)
          }
        >
          <img src={sneakerIcon} alt="" />
          <img src={sneakerImg} alt="" />
          <img src={sneakerIcon} alt="" />
        </div>
        <img src={currentImg} alt="Sneaker" />
      </div>
      <div className={style.productItemDetailsData}>
        <h3>name</h3>
        <p>price</p>
        <p>details</p>
        <div className={style.sizes}>
          <button>35</button>
          <button>36</button>
          <button>37</button>
          <button>38</button>
          <button>39</button>
          <button>40</button>
          <button>41</button>
          <button>42</button>
          <button>43</button>
        </div>
        <button>добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductItemDetails;
