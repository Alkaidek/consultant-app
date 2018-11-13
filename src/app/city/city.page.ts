import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { woj, city } from '../woj';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
  woj = woj;
  wojId;
  city = -1;
  cityArray;

  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.wojId = params.woj );
      this.cityArray = city[this.wojId];
  }

  ngOnInit() {
  }

}
