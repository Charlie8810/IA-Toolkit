import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User }  from '../../../../clases/user';
import { UsersService } from '../../../../services/users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UsersService]
})
export class ListUsersComponent implements OnInit 
{
  @Output() onRutSeleccionado = new EventEmitter<User>();
  
  
  public usuarios: User[];
  public mensajeError:any;
  
  constructor(private usersService: UsersService, private modalService: NgbModal) {}
  
  ngOnInit() 
  {
      this.usersService.ListUsers()
            .subscribe( (rslt:User[])=>{
                    this.usuarios = rslt;
                }, 
                error=>this.mensajeError=<any>error
       );
  }

  ngAbrirModal(usuario:User){
    
     this.onRutSeleccionado.emit(usuario);


    /*this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });*/
  }

}
