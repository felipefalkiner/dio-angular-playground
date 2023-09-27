import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path:"", component:TitleComponent, pathMatch:'full'},
  {path:"portfolio", component:CardComponent},
  {path:"portfolio/:id", component:CardComponent},
  {path:"**", redirectTo:''}, // you can use this for 404 page for example
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
