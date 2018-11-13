import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {city} from '../woj';
import {obj} from '../woj';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  wojId;
  cityId;
  city;
  obj;
  psp = -1;
  teacher = -1;
  objTechaer;

  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe( params => {
        this.wojId = params.woj;
        this.cityId = params.city;
        this.city = city[this.wojId];
        this.obj = obj[this.wojId].city[this.cityId];
      });
  }

  ngOnInit() {
  }
  test123() {
    console.log('PSP: ' + this.psp);
    this.teacher = -1;
    this.objTechaer = this.obj[this.psp].nauczyciele;
  }
}
