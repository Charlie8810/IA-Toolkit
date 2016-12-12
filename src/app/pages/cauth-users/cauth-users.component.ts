import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cauth-users',
  templateUrl: './cauth-users.component.html',
  styleUrls: ['./cauth-users.component.css']
})
export class CauthUsersComponent implements OnInit {

  options: Object;

  constructor() {
      this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
   }

  ngOnInit() {
  }

}
