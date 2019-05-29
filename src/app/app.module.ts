import { AuthGuard } from './services/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllblogsComponent } from './components/allblogs/allblogs.component';
import { LoginComponent } from './components/login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { RegisterComponent } from './components/register/register.component';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { UsersinglepostComponent } from './components/usersinglepost/usersinglepost.component';

import { NgxEditorModule } from 'ngx-editor';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import 'rxjs/add/operator/map'
import { CosmicService} from './services/cosmic.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AllblogsComponent,
    DashboardComponent,
  
    SinglepostComponent,
    UsersinglepostComponent

  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},


      
        {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          },
          {
            path: 'monkey',
            component: AllblogsComponent
          },
          
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
          {
            path: 'singlepost',
            component: SinglepostComponent
          },
          {
            path: 'singlepost',
            component: SinglepostComponent
          },
          {
            path: 'dashboard/usersinglepost',
            component: UsersinglepostComponent
          }
    
    




    ]),
    TransferHttpCacheModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    HttpModule,
    ModalModule.forRoot(),
   
  ],
  providers: [HttpClient, AuthGuard, CosmicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
