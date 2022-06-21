import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChucknorrisComponent } from './pages/chucknorris/chucknorris.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'chuck',component: ChucknorrisComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
