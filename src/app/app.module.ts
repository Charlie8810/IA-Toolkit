import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import { AgGridModule } from "ag-grid-ng2/main";
import { DataTableModule } from "angular2-datatable";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';
import { NavMenuComponent } from './widgets/nav-menu/nav-menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { routing } from './app.routes';
import { ProcesosComponent } from './pages/procesos/procesos.component';
import { CauthMantainerComponent } from './pages/cauth-mantainer/cauth-mantainer.component';
import { CauthUsersComponent } from './pages/cauth-users/cauth-users.component';
import { CauthUsergroupsComponent } from './pages/cauth-usergroups/cauth-usergroups.component';
import { CauthResourcesComponent } from './pages/cauth-resources/cauth-resources.component';
import { AddUserComponent } from './widgets/cauth/users/add-user/add-user.component';
import { ListUsersComponent } from './widgets/cauth/users/list-users/list-users.component';
import { UserDataComponent } from './widgets/cauth/users/user-data/user-data.component';
import { UsergroupDataComponent } from './widgets/cauth/usergroups/usergroup-data/usergroup-data.component';
import { AddUsergroupComponent } from './widgets/cauth/usergroups/add-usergroup/add-usergroup.component';
import { ListUsergroupsComponent } from './widgets/cauth/usergroups/list-usergroups/list-usergroups.component';
import { ListResourcesComponent } from './widgets/cauth/resources/list-resources/list-resources.component';
import { AddResourceComponent } from './widgets/cauth/resources/add-resource/add-resource.component';
import { ResourceDataComponent } from './widgets/cauth/resources/resource-data/resource-data.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    InicioComponent,
    ProcesosComponent,
    CauthMantainerComponent,
    CauthUsersComponent,
    CauthUsergroupsComponent,
    CauthResourcesComponent,
    AddUserComponent,
    ListUsersComponent,
    UserDataComponent,
    UsergroupDataComponent,
    AddUsergroupComponent,
    ListUsergroupsComponent,
    ListResourcesComponent,
    AddResourceComponent,
    ResourceDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    routing,
    ChartModule,
    AgGridModule.withComponents([
          ListResourcesComponent,
          ListUsergroupsComponent,
          ListUsersComponent
      ]),
    DataTableModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
