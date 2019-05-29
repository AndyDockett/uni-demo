import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CosmicService } from '../services/cosmic.service'
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-lazy-view',
  template: `

  
  
    <h3 *ngFor="let blog of allBlogs">{{blog.title}}</h3>
    <div>Check your Networks tab to see that the js file got loaded</div>
    <br>
    <div><em>/lazy/nested/</em> routes to the same page</div>
    
  `
})
export class LazyComponent implements OnInit {

  data;
  allBlogs;
  allPosts;
  author;
  jdata;

  constructor(private _http: Http, private route: Router, private cosmicService: CosmicService) {  this.showAllBlogs()}

//fetching all blogs from server
showAllBlogs() {
  this.cosmicService.showAllBlogs()
 .subscribe(res => {
      this.data = res;
      var jsondata = JSON.parse(this.data._body);
      this.allBlogs = jsondata.objects;
      console.log(this.allBlogs);
    })
}

ngOnInit() {

  this.showAllBlogs()
}

}



@NgModule({
  declarations: [LazyComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ]
})
export class LazyModule {

}
