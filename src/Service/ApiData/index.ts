// categories
import shows from '../../Assets/images/cantores.jpg';
import kids from '../../Assets/images/kids.jpg';
import opera from '../../Assets/images/opera.jpg';
import palestra from '../../Assets/images/palestra.png';
import party from '../../Assets/images/party.jpg';
import teatro from '../../Assets/images/teatro.jpg';

// Events
import whindersson from '../../Assets/images/banner1.png';
import concurso from '../../Assets/images/palestra.jpg';
import anitta from '../../Assets/images/anitta.jpg';
import lollapalooza from '../../Assets/images/lollapalooza.jpg';

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
    id: 'ab12-cd34',
    date: 'de: 06/08 até: 07/08',
    location: 'Rio de janeiro, RJ',
    title: 'whindersson nunes: Proparoxitona',
    description:
      'Whindersson Nunes Batista, mais conhecido como Whindersson Nunes é um comediante, youtuber, cantor, compositor e ator brasileiro, conheci...',
  },
  {
    cover: concurso,
    id: 'ab56-cd78',
    date: 'de: 06/08 até: 07/08',
    location: 'São Paulo, SP',
    title: 'Como se preparar para concursos ?',
    description:
      'Começar qualquer coisa do zero pode ser muito intimidador e estudar para concurso não é uma exceção: entre a infinidade de carreiras, cont...',
  },
  {
    cover: anitta,
    id: 'ab910-cd1112',
    date: 'de: 06/08 até: 07/08',
    location: 'Rio de janeiro, RJ',
    title: 'Show Completo | Anitta + Maiara & Maraisa',
    description:
      'A dupla Maiara & Maraisa convidam Anitta para cantar "Show Completo" no Música Boa Ao Vivo desta terça-feira, dia 8.',
  },
  {
    cover: lollapalooza,
    id: 'ab1314-cd1516',
    date: 'de: 06/08 até: 07/08',
    location: 'Rio de janeiro, RJ',
    title: 'Lollapalooza 2022',
    description:
      'Programação, line-up, shows ao vivo, notícias, fotos e vídeos sobre o festival de música Lollapalooza 2022, que acontece nos dias 25, 26 e 27 de Março',
  },
];
