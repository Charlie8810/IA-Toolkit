import { Component, OnInit, Input }  from '@angular/core';
import { GroupsService, UsersService }      from '../../../../services/';
import { Group, User, UsuarioBase }              from '../../../../clases';
import { Md5 }                from 'ts-md5/dist/md5';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [GroupsService,UsersService]
})
export class AddUserComponent implements OnInit 
{
  @Input() user;

  public grupos:Group[];
  public mensajeError:any;
  public log:string;

  public gruposSelected:Group[]=[];
  public usuario:User = new User();

  constructor(private groupService: GroupsService, private usersService:UsersService) { }

  ngOnInit() 
  {

    //console.log(this.user);
    /* Carga de usuario cuando viene de la grilla */
    if(typeof this.user !== 'undefined')
    {
        this.usuario=this.user ;
    }
    

    /* Carga de grupos  */
    this.groupService.listGroups().subscribe(
      (resultado:Group[])=>{
        this.grupos = resultado;
      },
      error=>this.mensajeError=<any>error
    );

  }

  public guardarUsuario(): void
  {

    if(this.checkFormatoRut(this.usuario.IdUsuario))
    {
        this.usuario.ClaveAcceso = this.generarContrasenia();
        this.usuario.Estado = "CAMBIAR_CLAVE";
        let b:UsuarioBase = new UsuarioBase(this.usuario, this.gruposSelected);  
        this.usersService.InsertUser(b)
          .subscribe( 
            (rslt:User)=>{
                this.usuario = rslt;
            }, 
            error=>this.mensajeError=<any>error); 
    }
    else
    {
        console.log("Rut Mal formateado");
    }
  }

  private generarContrasenia(): string
  {
      return Md5.hashStr(this.usuario.IdUsuario.substring(0,this.usuario.IdUsuario.length-2)).toString().toUpperCase();
  }

  private checkFormatoRut(elRut:string): boolean
  {
      return /^[0-9]+-[0-9kK]{1}$/.test(elRut)
  }

  private formateaRut():void
  {
      this.usuario.IdUsuario = this.usuario.IdUsuario.replace(/^(\d{7,8})(\w{1})$/, '$1-$2');   
  }

  private logCheckbox(element: HTMLInputElement): void 
  {
        this.grupos.forEach(grup=>{
          if(+element.value === grup.IdGrupo)
          {
            if(element.checked)
            {
              this.gruposSelected.push(grup);
            }
            else
            {
              let index = this.gruposSelected.indexOf(grup, 0);
              this.gruposSelected.splice(index, 1);
            }
          }  
        });
  }

}
