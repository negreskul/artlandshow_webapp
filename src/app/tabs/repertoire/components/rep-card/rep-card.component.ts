import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rep-card',
  templateUrl: './rep-card.component.html',
  styleUrls: ['./rep-card.component.css']
})
export class RepCardComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
