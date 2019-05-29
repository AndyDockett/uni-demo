
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CosmicService } from './services/cosmic.service'

@Component({
  selector: 'app-root',
  template: `
  <div class="app-container">
    <h1>Angular Universal Demo utilizing Angular & Angular CLI</h1>
    <nav class="nav-links">
      <a routerLink="/">Home</a>
      <a routerLink="/lazy">Lazy-loaded Route</a>
      <a routerLink="/lazy/nested">Nested Routes work too</a>
      <a *ngFor="let data of allBlogs;  let i = index" routerLink="data.title">{{data.title}}</a>

    </nav>
    <div class="router-container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: [`
    :host {
      background: #f1f1f1;
      font-family: Roboto,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
      font-display: swap;
    }
    .nav-links {
      background: #008591;
    }
    .nav-links a {
      color: #fff;
      display: inline-block;
      padding: 1rem;
      margin-right: 3rem;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
    .router-container {
      border: 0.5rem #00afc4 solid;
      padding: 2rem;
    }
  `]
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
