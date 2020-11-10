import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-calisma-saatleri',
  templateUrl: './calisma-saatleri.component.html',
  styleUrls: ['./calisma-saatleri.component.css']
})
export class CalismaSaatleriComponent implements OnInit {

  constructor(public routerExtensions:RouterExtensions) { }

  ngOnInit() {
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
