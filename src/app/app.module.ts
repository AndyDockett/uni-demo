

import { AllblogsComponent  } from './components/allblogs/allblogs.component';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';







import { ModalModule } from 'ngx-bootstrap/modal';
import 'rxjs/add/operator/map'


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
   
    AllblogsComponent,
   
  
    SinglepostComponent,
   

  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},


      
       
          {
            path: 'monkey', component: AllblogsComponent, pathMatch: 'full'
          },
          
         
          
          {
            path: 'monkey/singlepost',
            component: SinglepostComponent
          },
          
    
    




    ], { initialNavigation: 'enabled' }),
    TransferHttpCacheModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule,
    HttpModule,
   
   
  ],
  providers: [HttpClient, CosmicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
