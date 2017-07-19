import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './admin/default/default.component';
import { TesteNovoComponent } from './teste-novo/teste-novo.component';
import { TimeComponent } from './time/time.component';
import { AnimaTesteComponent } from './anima-teste/anima-teste.component';

const routes: Routes = [
  {
    path: '',
    component: AnimaTesteComponent,
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
