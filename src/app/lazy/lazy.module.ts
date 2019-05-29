import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CosmicService } from '../services/cosmic.service'
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-lazy-view',

  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
 
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
