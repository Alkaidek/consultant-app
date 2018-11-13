import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woj',
  templateUrl: './woj.page.html',
  styleUrls: ['./woj.page.scss'],
})
export class WojPage implements OnInit {

  woj = -1;
  btnDalej = true;
  constructor() { }
  changeBoolBtnDalej() {
    console.log(this.woj + ' : ' + this.btnDalej);
    if ((this.btnDalej && this.woj !== -1) || (!this.btnDalej && this.woj < 0)) {
      this.btnDalej = !this.btnDalej;
    }
  }
  ngOnInit() {
  }
}
