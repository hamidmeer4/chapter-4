import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chap4Component } from './chap-4/chap-4.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: '', redirectTo: '', pathMatch: 'full' },
  {path:'chap-4' , component: Chap4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
