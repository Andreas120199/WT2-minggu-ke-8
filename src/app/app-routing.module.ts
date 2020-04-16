import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ShellComponent } from './shell/shell.component';
import { KaryawanFormComponent } from './karyawan-form/karyawan-form.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    // canActivateChild: [LoginGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/first'
      },
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'karyawan/:id',
        component: KaryawanFormComponent
      },
      {
        path: 'karyawan',
        component: KaryawanFormComponent
      },
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
