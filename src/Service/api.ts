/* eslint-disable prefer-promise-reject-errors */

import { Client } from '../Interfaces';

const user: Client = {
  name: 'Lucas',
  surname: 'Vinicius',
  email: 'lucas@gmail.com',
  id: '13fg-27fh-37sj',
  phone: '(89) 9 9999-9999',
  password: 'login123',
};

export function Api(EndPoint: string): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (EndPoint === 'auth/login') {
        resolve({ user, token: 'djfg-ahfh-lcsj' });
      }
    }, 2000);
  });
}
