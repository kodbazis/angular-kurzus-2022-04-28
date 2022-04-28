import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doboz',
  templateUrl: './doboz.component.html',
  styleUrls: ['./doboz.component.css']
})
export class DobozComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // angular devtools
  // State

  @Input()
  szin = "";

  @Input()
  xPozicio = 90;

  @Input()
  yPozicio = 500;


  mozgatvaVan = false;

  // action
  mouseDownEsemenyTortent() {
    // state change
    this.mozgatvaVan = true;
  }

  mouseUpEsemenyTortent() {
    this.mozgatvaVan = false;
  }

  mouseMoveTortent(event: any) {
    if(this.mozgatvaVan) {
      this.xPozicio = event.clientX - 150;
      this.yPozicio = event.clientY - 100;
    }
  }

}
