import { nanoid } from 'nanoid';
import database from '../database.json';

export const productList = [
  {
    id: 1,
    name: 'name',
    price: 'price',
  },
  {
    id: 2,
    name: 'name',
    price: 'price',
  },
  {
    id: 3,
    name: 'name',
    price: 'price',
  },
  {
    id: 4,
    name: 'name',
    price: 'price',
  },
  {
    id: 5,
    name: 'name',
    price: 'price',
  },
];

const newSet: Set<string> = new Set();
const brandsFromDatabase = database.map(
  (item) => item.data.brandRootInfo.brandItemList[0].brandName
);

brandsFromDatabase.forEach((brand) => newSet.add(brand));
const brands = Array.from(newSet).map((item) => ({
  id: nanoid(),
  title: item,
}));

export { brands };
