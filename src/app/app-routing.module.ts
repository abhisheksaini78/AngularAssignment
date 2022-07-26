import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { CreateComponent } from './MyComponents/create/create.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  
  { path: 'Home', component: TodosComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'Manage Blogs', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
