import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottoe-phone',
  templateUrl: './lottoe-phone.component.html',
  styleUrls: ['./lottoe-phone.component.scss']
})
export class LottoePhoneComponent implements OnInit {
  options: AnimationOptions = {
    path: './assets/lf30_editor_tv2lkew2.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  constructor() { }

  ngOnInit(): void {
  }

}
