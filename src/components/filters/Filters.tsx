import { brands } from '../../ts/data';
import style from './style.module.scss';

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  return (
    <div className={style.filters}>
      <h3>бренды</h3>
      <div className={style.brandList}>
        {brands.map((item) => (
          <label htmlFor={item.id} key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              className={style.realCheckbox}
            />
            <span className={style.customCheckbox} />
            {item.title}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
