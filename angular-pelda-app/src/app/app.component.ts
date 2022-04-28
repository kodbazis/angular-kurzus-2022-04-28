import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kivalasztottSzin = "";

  szinvalasztasTortent(szin: string) {
    this.kivalasztottSzin = szin;
  }

  elemek = [
    "Teszt szöveg 1.",
    "Teszt szöveg 2.",
    "Teszt szöveg 3.",
  ];

  elemTorolve(i: number) {
      console.log(i);
      this.elemek.splice(i, 1);
  }

  ujElemLetrehozva(event: any) {
    event.preventDefault();
    this.elemek.push(event.target.elements.elem.value);
    event.target.reset();
  }
}
