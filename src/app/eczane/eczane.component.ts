import { Component, OnInit } from "@angular/core";
import { EczaneService } from "./eczane.service";
import { SehirService } from "./sehir.service";
import { Sehir } from "./sehir";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-eczane",
    templateUrl: "./eczane.component.html",
    styleUrls: ["./eczane.component.css"],
    providers: [EczaneService, SehirService],
})
export class EczaneComponent implements OnInit {
    constructor(
        public servisEczane: EczaneService,
        private sehirService: SehirService,
        public routerExtensions: RouterExtensions
    ) {}
    eczaneler: any[];
    sehirler: Sehir[] = [];
    sehirPlaka: number[] = [];
    ngOnInit() {
        this.sehirGel();
    }
    sehirGel() {
        this.sehirService.getSehir().subscribe((resp) => {
            this.sehirler = resp;
            this.sehirPlaka = this.sehirler.map((x) => {
                return x.plaka;
            });
        });
    }
    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
