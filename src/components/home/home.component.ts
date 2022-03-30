import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  options: AnimationOptions = {
    path: 'https://assets6.lottiefiles.com/packages/lf20_09n1iree.json',

  };

  constructor() {
   }

  ngOnInit(): void {
  }

}
