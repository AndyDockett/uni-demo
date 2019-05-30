
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CosmicService } from './services/cosmic.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data;
  allBlogs;


  constructor(private _http: Http, private route: Router, private cosmicService: CosmicService) { }

  ngOnInit() {

    this.showAllBlogs()
  }

  showAllBlogs() {
    this.cosmicService.showAllBlogs()
   .subscribe(res => {
        this.data = res;
        var jsondata = JSON.parse(this.data._body);
        this.allBlogs = jsondata.objects;
        console.log(this.allBlogs);
      })
  }

}
