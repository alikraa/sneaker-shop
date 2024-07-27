import style from './style.module.scss';

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = () => {
  return (
    <div className={style.filters}>
      <h3>бренды</h3>
      <div className={style.brandList}>
        <label htmlFor="1">
          <input type="checkbox" id="1" className={style.realCheckbox} />
          <span className={style.customCheckbox} />
          Nike
        </label>
        <label htmlFor="2">
          <input type="checkbox" id="2" className={style.realCheckbox} />
          <span className={style.customCheckbox} />
          Jordan
        </label>
      </div>
    </div>
  );
};

export default Filters;
