import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../../../services/groups.service';
import { Group }       from '../../../../clases/group';
import { User }       from '../../../../clases/user';


@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [GroupsService]
})
export class AddUserComponent implements OnInit {

  public grupos:Group[];
  public mensajeError:any;
  public log:string;

  public gruposSelected:Group[]=[];
  public usuario:User = new User();

  constructor(private groupService: GroupsService) { }

  ngOnInit() {
    /* Carga de grupos  */
    this.groupService.listGroups().subscribe(
      (resultado:Group[])=>{
        this.grupos = resultado;
      },
      error=>this.mensajeError=<any>error
    );

  }

  public guardarUsuario(){
    alert("guardando");

  }

  private logCheckbox(element: HTMLInputElement): void {
        //this.log = `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`

        this.grupos.forEach(grup=>{
          if(+element.value === grup.IdGrupo)
          {
            if(element.checked){
              this.gruposSelected.push(grup);
              //this.gruposSelected[] = grup;
            }else{
              let index = this.gruposSelected.indexOf(grup, 0);
              this.gruposSelected.splice(index, 1);
            }
          }
          
        });

        //console.log(this.gruposSelected);
    }

}
