import {Marcacao} from './marcacao';
import {Enquete} from './enquete';

export class Video {
  id: number;
  titulo: string;
  path: string;
  tempoTotal: number;
  thumb: string;
  marcacoes: Array<Marcacao>;
  enquete: Enquete;
}
