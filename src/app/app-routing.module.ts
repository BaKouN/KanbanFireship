import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { KanbanComponent } from './kanban/kanban.component';


const routes: Routes = [
  {path: '', component: HomePageComponent,},
  {path: 'kanban', component: KanbanComponent},
  {path: 'customers', component: KanbanComponent},
  {
    path : 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
