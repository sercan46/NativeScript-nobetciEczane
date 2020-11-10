import { Component, OnInit } from "@angular/core";
import { Sehir } from "../sehir";
import { SehirService } from "../sehir.service";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { EczaneService } from "../eczane.service";

@Component({
    selector: "ns-eczane-detail",
    templateUrl: "./eczane-detail.component.html",
    styleUrls: ["./eczane-detail.component.css"],
})
export class EczaneDetailComponent implements OnInit {
    plaka: Sehir;
    ilAdi: string;
    eczaneler: Sehir;

    constructor(
        private sehirService: SehirService,
        private route: ActivatedRoute,
        private router:Router,
        private routerExtensions: RouterExtensions,
        private eczaneService:EczaneService
    ) {}

    ngOnInit() {

        const plaka = +this.route.snapshot.params.plaka;
        this.plaka = this.sehirService.getSehirs(plaka);
        this.ilAdi=this.plaka.il
        this.eczaneBul(this.ilAdi)
    }

    eczaneBul(ilAdi:string){
       this.eczaneService.getEczane(ilAdi).subscribe({
            next: (resp) => {
                this.eczaneler = resp["result"];
            },
            error: (err) => {
                console.error(err);
            },
            complete: () => {},
        });
    }

    goBack(){
        this.routerExtensions.back()
    }


}
