import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router";

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  private url_actual: string;
  private enlaces: Array<any> = [
    {
      titulo:'Auth',
      enlace:'#',
      subenlaces: [
        {
          titulo:'Mantenedor Usuarios',
          enlace:'/authman/users'
        },
        {
          titulo:'Mantenedor Grupos',
          enlace:'/authman/usergroups'
        },
        {
          titulo:'Mantenedor Recursos',
          enlace:'/authman/resources'
        },
        
      ]
    },
    {
      titulo:'Procesos',
      enlace:'#',
      subenlaces: [
        {
          titulo: 'Campañas',
          enlace:'/procesos/campanas'
        }
      ] 
    },
    
  ];

  

  constructor(public router: Router) {
      this.router.events.subscribe((evt) => this.url_actual = evt.url );
  }

  ngOnInit() { 
  }

}
