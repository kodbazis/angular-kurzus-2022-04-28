import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  kivalasztottSzin = "";

  szinvalasztasTortent(szin: string) {
    this.kivalasztottSzin = szin;
  }

  elemek: any = [];

  ngOnInit(): void {
    // fetch()
    // GET https://kodbazis.hu/api/cimek
  }

  elemTorolve(i: number) {
      console.log(i);
      this.elemek.splice(i, 1);
      // fetch()
      // DELETE https://kodbazis.hu/api/cimek/${i}
  }

  ujElemLetrehozva(event: any) {
    event.preventDefault();
    this.elemek.push(event.target.elements.elem.value);
    event.target.reset();
    // fetch()
    // POST https://kodbazis.hu/api/cimek
    // JSON.stringify({cim: event.target.elements.elem.value});
  }
}
