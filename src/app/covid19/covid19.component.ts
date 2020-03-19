import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {formatDate} from '@angular/common';
import { Covid19Service} from '../service/covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  today = new Date();
  jstoday = '';
  hospitals = []
  constructor(private router: Router, private route: ActivatedRoute, private covid: Covid19Service) {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  ngOnInit() {
    this.covid.getData()
      .subscribe(
        res => this.hospitals = res,
        err => console.log(err)
      );
  }

  showOverview() {
    this.router.navigate(['local'], {relativeTo: this.route});

  }

  showContact() {
    this.router.navigate(['global'], {relativeTo: this.route});

  }

//   const dateFormat = require('dateformat');
//   const now = new Date();
//   dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// }
}
