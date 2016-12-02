import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProcesosComponent } from './pages/procesos/procesos.component';
import { CauthMantainerComponent } from './pages/cauth-mantainer/cauth-mantainer.component';

const routes: Routes = [
    // Root
    { path: '', component: InicioComponent},
    // charLee Auth mantainers
    { path: 'authman/users', component: CauthMantainerComponent},
    { path: 'authman/usergroups', component: CauthMantainerComponent},
    { path: 'authman/resources', component: CauthMantainerComponent},
    // Internal process mantainers 
    { path: 'procesos', component: ProcesosComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
