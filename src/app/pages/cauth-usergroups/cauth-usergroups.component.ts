import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { GrupoBase }  from '../../clases/';

@Component({
  selector: 'app-cauth-usergroups',
  templateUrl: './cauth-usergroups.component.html',
  styleUrls: ['./cauth-usergroups.component.css']
})
export class CauthUsergroupsComponent implements OnInit {

  @ViewChild('t') t;
  public grupo:GrupoBase;

  constructor() { }

  ngOnInit() {
  }

  onGrupoSeleccionado(grups:GrupoBase) {
    this.grupo = grups;
    this.t.select('Detalle');
  }

  public beforeChange($event: NgbTabChangeEvent) {
      //console.log($event);    
  };

}
