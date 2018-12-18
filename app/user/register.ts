import { IUser } from "./user";

export class Customer implements IUser{

    constructor(
      public id: number,
      public username = '',
      public password = '',
      public attempts: number,
      public firstName = '',
      public lastName = '',
      public email = '',
      public sendCatalog = false,
      public addressType = 'home',
      public street1?: string,
      public street2?: string,
      public city?: string,
      public state = '',
      public zip?: string) { }
  }
  