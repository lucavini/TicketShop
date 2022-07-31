import { CategoriesProps } from '../Interfaces';
import shows from '../Assets/images/cantores.jpg';
import teatro from '../Assets/images/teatro.jpg';
import kids from '../Assets/images/kids.jpg';
import palestra from '../Assets/images/palestra.png';
import party from '../Assets/images/party.jpg';
import opera from '../Assets/images/opera.jpg';

export const categories: CategoriesProps[] = [
  {
    title: 'Shows',
    cover: shows,
  },
  {
    title: 'Teatro',
    cover: teatro,
  },
  {
    title: 'Infantil',
    cover: kids,
  },
  {
    title: 'Palestras',
    cover: palestra,
  },
  {
    title: 'Festas',
    cover: party,
  },
  {
    title: 'Clássicos',
    cover: opera,
  },
];
