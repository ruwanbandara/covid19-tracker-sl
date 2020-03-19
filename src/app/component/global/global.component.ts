import { Component, OnInit } from '@angular/core';
import { Covid19Service} from '../../service/covid19.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  data = []
  constructor(private covid: Covid19Service) { }

  ngOnInit() {
    this.covid.getData()
      .subscribe(
        res => this.data = res,
        err => console.log(err)
      );
  }

}
