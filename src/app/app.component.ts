import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*
  templateUrl: './app.component.html',
  */
  template:`
  <h1>Welcome to {{title}}!</h1>
  <p>It certainly does inline!</p>
  <ul>
  <li *ngFor="let team of teams; let last = last">{{ team.baseball }} <strong *ngIf="last">Hey, I am last!</strong></li>
  </ul>`,
  /*styleUrls: ['./app.component.css']*/
  styles:[`h1{ color: blue; }`]
})
export class AppComponent {
  title = 'app';
  teams = [
    {baseball:'Blue Jays'}, 
    {baseball:'Indians'}, 
    {baseball:'Yankees'},
    {baseball:'Mets'}/*,
    {basketball:'Raptors'}, 
    {football:'Toronto Maple Leafs'}*/
  ]

}
