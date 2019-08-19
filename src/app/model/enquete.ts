import {Alternativa} from './alternativa';

export class Enquete {
  id: number;
  alternativas: Array<Alternativa>;
  pergunta: string;
  tempoInicial: number;
}
