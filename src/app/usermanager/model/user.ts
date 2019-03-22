import {Address} from './address';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

