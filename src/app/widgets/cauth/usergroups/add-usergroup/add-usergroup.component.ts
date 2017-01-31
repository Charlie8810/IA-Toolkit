import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GroupsService, OfficeService }      from '../../../../services/';
import { Group, GrupoBase, Office }              from '../../../../clases';


@Component({
  selector: 'add-usergroup',
  templateUrl: './add-usergroup.component.html',
  styleUrls: ['./add-usergroup.component.css'],
  providers: [GroupsService, OfficeService]
})
export class AddUsergroupComponent implements OnInit, AfterViewInit {

  @Input() grupobase;
  //@ViewChild('chekk') tchk; 
  public grupobas:GrupoBase;
  public gruposbase:GrupoBase[];
  public mensajeError:any;
  public gruposSelected:Group[]=[];
  public oficinas:Office[];
  public oficinasSelected:Office[]=[];

  constructor(private groupService:GroupsService, private offcieService:OfficeService) 
  {
      
  }

  ngOnInit() 
  {
      if (typeof this.grupobase !== 'undefined')
      {
        this.grupobas = this.grupobase;
        
      }
      else
      {
        let off:Office[] = [];
        this.grupobas = new GrupoBase(new Group(), off);
      }

      /*Carga de oficinas */
      this.offcieService.listOffices().subscribe(
        (resultado:Office[])=>{this.oficinas = resultado},
        error=>this.mensajeError=<any>error
      );   
  }


  ngAfterViewInit(){
       //this.grupobas.Oficinas.findIndex(x=>x.CodSucursal) > -1
       //grupobas.Oficinas.findIndex(x=>x.CodSucursal === off.CodSucursal) > -1 ? true : null
       //this.grupobas.Oficinas.map(x=>x.CodSucursal).indexOf()
       //grupobas.Oficinas.map(x=>x.CodSucursal).indexOf(off.CodSucursal) > -1 ? true : null
  }

  public cpCheckear(o:Office):boolean
  {
       return this.grupobas.Oficinas.findIndex(x=>x.CodSucursal === o.CodSucursal) > -1 ? true : false;
  }


  public cpValidar():boolean
  {
    let validaciones:string[]=[];

    if(this.grupobas.grupo.Nombre === '')
    {
        validaciones.push("El campo nombre no puede ser vacio");
    }

    return validaciones.length <= 0;
  }


  public cpGuardar():void
  {
      if(this.cpValidar())
      {

          console.log(this.grupobas);
          this.groupService.InsertGroup(this.grupobas).subscribe(
            (resultado:GrupoBase)=>{
              //this.grupobas = resultado;
              console.log("grupo se guardo");
            },
            error=>this.mensajeError=<any>error
          );
      }
  }

  public cpSeleccionOficina(element: HTMLInputElement): void
  {
      this.oficinas.forEach(ofic=>{
          if(+element.value === ofic.CodSucursal)
          {
              if(element.checked)
              {
                this.grupobas.Oficinas.push(ofic);
              }
              else
              {
                let index = this.grupobas.Oficinas.indexOf(ofic, 0);
                this.grupobas.Oficinas.splice(index, 1);
              }
          }
      });
  }

}
