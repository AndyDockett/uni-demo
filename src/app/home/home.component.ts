import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CosmicService } from '../services/cosmic.service'
import { CommonModule} from '@angular/common';


@Component({

  selector: 'app-home',
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
 
})
export class HomeComponent {
  public message = `Angular Universal`;
  // tslint:disable-next-line:max-line-length
  public image = 'https://camo.githubusercontent.com/81f72f2fdf98aa1d30b5b215bc8ca9420b249e81/68747470733a2f2f616e67756c61722e696f2f67656e6572617465642f696d616765732f6d61726b6574696e672f636f6e636570742d69636f6e732f756e6976657273616c2e706e67';

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

//this.allBlogs = [{

  //title: 'Test Page',
  //type_slug: 'pages',

   //   } ]

    //  this.data = this.allBlogs
}



}