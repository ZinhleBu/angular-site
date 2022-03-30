import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Gryphon Lounge';
  description='Angular website made for the gryphon lounge'
  options: AnimationOptions = {
    path: '../assets/lf30_editor_cq9ondaa.json',

  };
  constructor() {

}

ngOnInit(): void {
}

}
