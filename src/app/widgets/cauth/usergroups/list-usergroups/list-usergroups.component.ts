import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GrupoBase }  from '../../../../clases/grupo-base';
import { GroupsService } from '../../../../services/groups.service';

@Component({
  selector: 'list-usergroups',
  templateUrl: './list-usergroups.component.html',
  styleUrls: ['./list-usergroups.component.css'],
  providers: [GroupsService]

})
export class ListUsergroupsComponent implements OnInit {

  @Output() onGrupoSeleccionado = new EventEmitter<GrupoBase>();


  public grupos:GrupoBase[];
  public mensajeError:any;

  constructor(private groupService:GroupsService) { }

  ngOnInit() {
       this.groupService.listBaseGroups().subscribe( 
          (rslt:GrupoBase[])=>{
                    this.grupos = rslt;
          }, 
          error=>this.mensajeError=<any>error
       );
  }

  public cpDetalleGrupo(x:GrupoBase): void
  {
      this.onGrupoSeleccionado.emit(x);
  }

}
