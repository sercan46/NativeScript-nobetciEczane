import { Component, OnInit } from '@angular/core';
import * as TNSPhone from 'nativescript-phone';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
export function onNavBtnTap(){
    console.log("Navigation button tapped!");

}
@Component({
  selector: 'ns-acil',
  templateUrl: './acil.component.html',
  styleUrls: ['./acil.component.css']
})


export class AcilComponent implements OnInit {

  constructor(public router:Router,
    public routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  onAmbulans(){
    TNSPhone.dial("112", true);
  }
  onSaglik(){
    TNSPhone.dial("184", true);
  }
  onCorona(){
    TNSPhone.dial("184", true);
  }
  onCenaze(){
    TNSPhone.dial("188", true);
  }
  onBeyaz(){
    TNSPhone.dial("113", true);
  }
  onSigara(){
    TNSPhone.dial("171", true);
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
