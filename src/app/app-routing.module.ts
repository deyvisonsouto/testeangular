import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './admin/default/default.component';
import { TesteNovoComponent } from './teste-novo/teste-novo.component';
const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: []
  },
  {
    path: 'Novo',
    component: TesteNovoComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
