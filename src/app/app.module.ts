<<<<<<< HEAD


import { AllblogsComponent  } from './components/allblogs/allblogs.component';

=======
import { AuthGuard } from './services/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllblogsComponent } from './components/allblogs/allblogs.component';
import { LoginComponent } from './components/login/login.component';
>>>>>>> edb1c1ee817b3feeca697cca7e7a1afb798c91c1
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

import { SinglepostComponent } from './components/singlepost/singlepost.component';

import 'rxjs/add/operator/map'
import { NgxEditorModule } from 'ngx-editor';

import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CosmicService} from './services/cosmic.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
   
    AllblogsComponent,
   
  
    SinglepostComponent,
   
=======
    LoginComponent,
    RegisterComponent,
    AllblogsComponent,
    DashboardComponent,
  
    SinglepostComponent,
    UsersinglepostComponent
>>>>>>> edb1c1ee817b3feeca697cca7e7a1afb798c91c1

  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},


      
<<<<<<< HEAD
       
=======
        {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          },
>>>>>>> edb1c1ee817b3feeca697cca7e7a1afb798c91c1
          {
            path: 'monkey',
            component: AllblogsComponent
          },
          
<<<<<<< HEAD
         
          
=======
          { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
>>>>>>> edb1c1ee817b3feeca697cca7e7a1afb798c91c1
          {
            path: 'singlepost',
            component: SinglepostComponent
          },
<<<<<<< HEAD
          
=======
          {
            path: 'singlepost',
            component: SinglepostComponent
          },
          {
            path: 'dashboard/usersinglepost',
            component: UsersinglepostComponent
          }
>>>>>>> edb1c1ee817b3feeca697cca7e7a1afb798c91c1
    
    




    ]),
    TransferHttpCacheModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    HttpModule,
<<<<<<< HEAD
   
   
  ],
  providers: [HttpClient, CosmicService],
=======
    ModalModule.forRoot(),
   
  ],
  providers: [HttpClient, AuthGuard, CosmicService],
>>>>>>> edb1c1ee817b3feeca697cca7e7a1afb798c91c1
  bootstrap: [AppComponent]
})
export class AppModule { }
