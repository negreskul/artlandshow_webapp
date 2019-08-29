import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent implements OnInit {

  public mysteryImgSrc = '../../assets/poster.jpg';

  constructor() { }

  ngOnInit() {
  }

}
