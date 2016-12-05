import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Directive } from '@angular/core';


@Component({
  selector: 'app-cauth-resources',
  templateUrl: './cauth-resources.component.html',
  styleUrls: ['./cauth-resources.component.css']
              
})
export class CauthResourcesComponent implements OnInit, AfterViewInit {

 constructor(private elementRef : ElementRef) {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){

  }

}
