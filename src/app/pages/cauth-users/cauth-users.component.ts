import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Directive } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { User }  from '../../clases/';

@Component({
  selector: 'app-cauth-users',
  templateUrl: './cauth-users.component.html',
  styleUrls: ['./cauth-users.component.css']
})
export class CauthUsersComponent implements OnInit, AfterViewInit {

  @ViewChild('t') t; 
  public usuario:User;

  constructor() {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){

  }

  onRutSeleccionado(usuario: User) {
    this.usuario = usuario;
    this.t.select('Detalle');
    //console.log(this.t);
    
  }

  public beforeChange($event: NgbTabChangeEvent) {
      //console.log($event);    
  };

}
