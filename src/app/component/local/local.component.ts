import { Component, OnInit } from '@angular/core';
import { Covid19Service} from '../../service/covid19.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  data = [];
  constructor(private covid: Covid19Service) { }

  ngOnInit() {
    this.covid.getData()
      .subscribe(
        res => this.data = res,
        err => console.log(err)
      );
  }
  testData() {
    console.log(this.data);
  }

}
