import { Group } from './Group';
import { Office } from './Office';

export class GrupoBase {

    public grupo:Group;
    public Oficinas:Office[];

    constructor(x:Group, y:Office[]){
        this.grupo = x;
        this.Oficinas = y;
    }

}
