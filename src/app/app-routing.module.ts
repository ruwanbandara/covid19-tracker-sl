import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Covid19Component} from './covid19/covid19.component';
import {LocalComponent} from './component/local/local.component';
import {GlobalComponent} from './component/global/global.component';


const routes: Routes = [
  {path: '', redirectTo: '/covid19/local', pathMatch: 'full'},
  {
    path: 'covid19',
    component: Covid19Component,
    children: [
      {path: 'local', component: LocalComponent},
      {path: 'global', component: GlobalComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
