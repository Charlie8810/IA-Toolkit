import { User } from './user';
import { Group } from './Group';

export class UsuarioBase 
{

    public usuario:User;
    public grupos:Group[];

    constructor(x:User, y:Group[])
    {
        this.usuario = x;
        this.grupos = y;
    }

}
