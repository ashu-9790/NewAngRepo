import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PipesInAngular';
  name="Ashish Patil"
  today=Date.now();
  word="Hello How Are you"
  val=10
}
