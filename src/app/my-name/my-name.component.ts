import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoronaService } from './my-name.service';

@Component({
  selector: 'ns-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.css']
})
export class MyNameComponent implements OnInit {

  constructor(public router:Router,
    public coronaSerive:CoronaService) { }

  ngOnInit() {
    this.coronaService();
  }
  eczaneAc(){
    this.router.navigate(["eczane"]);

  }
  eczaneCalismaSaati(){
    this.router.navigate(["calisma-saati"]);
  }
  acilTelefonNumaralari(){
    this.router.navigate(["acil"]);

  }
  turkey:any[]=[];

  coronaService(){
    this.coronaSerive.getCorona().subscribe((resp) => {
        this.turkey = resp;
    })}
}
