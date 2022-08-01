/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-promise-reject-errors */

import { user, weekEvents } from './ApiData';

export function Api(EndPoint: string, params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (EndPoint === 'auth/login' && (params.email === 'lucas@gmail.com' && params.password === 'login123')) {
        resolve({ user, token: 'djfg-ahfh-lcsj' });
        
      } else if (EndPoint === 'auth/verifytoken' && params === 'djfg-ahfh-lcsj') {
        resolve({ data: true });

      } else if (EndPoint === 'WeekEvents/') {
        resolve({ data: weekEvents });
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
}
