import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntityComponent } from './pages/entity/entity.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DetailComponent } from './pages/entity/detail/detail.component';
import { EditComponent } from './pages/entity/edit/edit.component';
import { ListComponent } from './pages/entity/list/list.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './pages/movie/movie.component';
import { FormComponent } from './pages/movie/form/form.component';
import { ComponentUserComponent } from './features/component-user/component-user.component';
import { ADetailsComponent } from './features/component-user/user-details/user-details.component';
import { AEditComponent } from './features/component-user/user-edit/user-edit.component';
import { UListComponent } from './features/component-user/user-list/user-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    EntityComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    EditComponent,
    ListComponent,
    AboutComponent,
    MovieComponent,
    FormComponent,
    ComponentUserComponent,
    ADetailsComponent,
    AEditComponent,
    UListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
