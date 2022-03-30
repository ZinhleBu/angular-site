import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  animations: [
    trigger('keyframes',[
      transition(':enter', [
        animate('5s', keyframes([
          style({transform: 'translateX(0%)'}),
          // style({delay: '1s'}),
          style({transform: 'translateX(100%)'}),
          style({transform: 'translate(100%, 100%)'}),
          style({transform: 'translateY(100%)'}),
          style({transform: 'translateX(0%)'})
        ])),
      ])
    ])
  ]
})
export class CircleComponent implements OnInit {
  show: boolean = true;

  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      } ,1);
    } ,3000);
  }

}
