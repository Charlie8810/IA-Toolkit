import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import { ResourcesService } from '../../../../services/resources.service';
import { Resource } from '../../../../clases/resource';
//import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css'],
  providers: [ResourcesService]
})
export class ListResourcesComponent implements OnInit {
    
                 
  public gridOptions: GridOptions;
  public resources: Resource[];
  public mensajeError:any;

  constructor(private resourceService: ResourcesService) {
        this.gridOptions = {
                    columnDefs: this.createColumnDefs(),
                    enableColResize: true,
                    enableSorting: true,
                    enableFilter: true
                }

  }

    createColumnDefs() {
        return [
            {headerName: "Nombre", field: "Nombre", width: 200},
            {headerName: "Tipo",field: "Tipo", width: 100},
            {headerName: "Url", field: "Url", width: 400},
            {headerName: "Padre", field: "IdRecursoPradre", width: 200}
        ];
    }

    ngOnInit() {

        this.resourceService.getResources()
                .subscribe( (rslt:Resource[])=>{
                                this.resources = rslt;
                            }, 
                            error=>this.mensajeError=<any>error);

    }



  

}

