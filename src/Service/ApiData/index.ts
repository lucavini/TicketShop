// categories
import shows from '../../Assets/images/cantores.jpg';
import kids from '../../Assets/images/kids.jpg';
import opera from '../../Assets/images/opera.jpg';
import palestra from '../../Assets/images/palestra.png';
import party from '../../Assets/images/party.jpg';
import teatro from '../../Assets/images/teatro.jpg';

// Events
import whindersson from '../../Assets/images/banner1.png';

// Interfaces
import { CategoriesProps, Client, WeekEvent } from '../../Interfaces';

export const user: Client = {
  name: 'Lucas',
  surname: 'Vinicius',
  email: 'lucas@gmail.com',
  id: '13fg-27fh-37sj',
  phone: '(89) 9 9999-9999',
  password: 'login123',
};

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

export const weekEvents: WeekEvent[] = [
  {
    cover: whindersson,
    date: 'de: 06/08 até: 07/08',
    location: 'Rio de janeiro, RJ',
    title: 'whindersson nunes: Proparoxitona',
    description:
      'Whindersson Nunes Batista, mais conhecido como Whindersson Nunes é um comediante, youtuber, cantor, compositor e ator brasileiro, conheci...',
  },
];
