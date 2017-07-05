import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './admin/default/default.component';
import { TesteNovoComponent } from './teste-novo/teste-novo.component';
import { TimeComponent } from './time/time.component';
const routes: Routes = [
  {
    path: '',
    component: TimeComponent,
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
