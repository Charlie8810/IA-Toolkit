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

  public gridOptions:GridOptions;

  constructor(private resourceService: ResourcesService) {

        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.enableFilter = true;
  }

    private createColumnDefs() {
        return [
            {headerName: "Nombre", field: "Nombre", width: 200},
            {headerName: "Tipo",field: "Tipo", width: 100},
            {headerName: "Url", field: "Url", width: 400},
            {headerName: "Padre", field: "IdRecursoPradre", width: 200}
        ];
    }

    private createRowData() {
        let ret:Resource[]=[];
        this.resourceService.getResources().then(res=>ret=res);
        return ret;
    }

    ngOnInit() {
    }



  

}

