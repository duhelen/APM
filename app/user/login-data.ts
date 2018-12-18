import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IUser } from './user';

export class LoginData implements InMemoryDbService {

  createDb() {
    const users: IUser[] = [
      {
        'id': 1,
        'username': 'helen',
        'password': 'du',
        'attempts': 3
      },
      {
        'id': 2,
        'username': 'guest',
        'password': 'guest',
        'attempts': 3
      }];
    return { users };
  }
}
