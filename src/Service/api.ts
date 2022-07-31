/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
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

export function Api(EndPoint: string, params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (EndPoint === 'auth/login' && (params.email === 'lucas@gmail.com' && params.password === 'login123')) {
        resolve({ user, token: 'djfg-ahfh-lcsj' });
        
      } else if (EndPoint === 'auth/verifytoken' && params === 'djfg-ahfh-lcsj') {
        resolve({ data: true });

      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
}
