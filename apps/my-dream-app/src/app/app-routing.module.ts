import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ComponentUserComponent } from './features/component-user/component-user.component';
import { AEditComponent } from './features/component-user/user-edit/user-edit.component';
import { ADetailsComponent } from './features/component-user/user-details/user-details.component';
import { EntityComponent } from './pages/entity/entity.component'
import { EditComponent } from './pages/entity/edit/edit.component';
import { ListComponent } from './pages/entity/list/list.component';
import { DetailComponent } from './pages/entity/detail/detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'movie',
    component: EntityComponent,
    children: [
      { path: ':id', pathMatch: 'full', component: DetailComponent },
      { path: ':id/edit', pathMatch: 'full', component: EditComponent },
    ],
  },
  {
    path: 'users',
    component: ComponentUserComponent,
    children: [
      { path: ':id', pathMatch: 'full', component: ADetailsComponent },
      { path: ':id/edit', pathMatch: 'full', component: AEditComponent },
    ],
  },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
