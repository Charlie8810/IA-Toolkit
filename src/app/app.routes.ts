import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProcesosComponent } from './pages/procesos/procesos.component';
import { CauthMantainerComponent } from './pages/cauth-mantainer/cauth-mantainer.component';
import { CauthResourcesComponent } from './pages/cauth-resources/cauth-resources.component';
import { CauthUsergroupsComponent } from './pages/cauth-usergroups/cauth-usergroups.component';
import { CauthUsersComponent } from './pages/cauth-users/cauth-users.component';

const routes: Routes = [
    // Root
    { path: '', component: InicioComponent},
    // charLee Auth mantainers
    { path: 'authman/users', component: CauthUsersComponent},
    { path: 'authman/users/:iud', component: CauthUsersComponent},
    
    { path: 'authman/usergroups', component: CauthUsergroupsComponent},
    { path: 'authman/usergroups/:ugid', component: CauthUsergroupsComponent},
    
    { path: 'authman/resources', component: CauthResourcesComponent},
    { path: 'authman/resources/:rid', component: CauthResourcesComponent},
    // Internal process mantainers 
    { path: 'procesos/campanas', component: ProcesosComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,  { useHash: true });
