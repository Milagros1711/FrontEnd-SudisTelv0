import { Type } from './Type';
export class Resource {
  idResource: number = 0;
  nameResource: string = '';
  type: Type = new Type();
  stock: number = 0;
  status: string = "";
}
