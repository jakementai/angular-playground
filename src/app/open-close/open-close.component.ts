import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
        state('open', style({
        height: '300px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),

      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),

      transition('open <=> close', [animate('1s 0ms cubic-bezier(0.165, 0.84, 0.44, 1)')]),
      ]),
  ],
})
export class OpenCloseComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
