import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Eczane } from "../../eczane";
import { EczaneService } from "../../eczane.service";
import * as utils from "tns-core-modules/utils/utils";
import { RouterExtensions } from "nativescript-angular/router";
import * as TNSPhone from 'nativescript-phone';

@Component({
    selector: "ns-eczane-bilgi",
    templateUrl: "./eczane-bilgi.component.html",
    styleUrls: ["./eczane-bilgi.component.css"],
})
export class EczaneBilgiComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        public eczaneService: EczaneService,
        public routerExtensions:RouterExtensions
    ) {}
    names: Eczane;
    eczaneKonum: string;

    ngOnInit() {
        console.log("aaaaaaa", this.route);
        const name = +"" + this.route.snapshot.params.name;
        console.log("name", name);
        this.names = this.eczaneService.getDetailler(name);
        this.eczaneKonum = this.names.loc;
        console.log("eczaneKonum", this.eczaneKonum);
    }
    googleLinkAc() {
        console.log("casca");
        if (this.eczaneKonum == "") {
            alert("Eczane Konumu Bilgisi Bulunamadı Bu Durum İle İlgili Çalışmalarımız Başladı");
        } else {
            utils.openUrl(
                "https://www.google.com/maps/search/?api=1&query=" +
                    this.eczaneKonum
            );
        }
    }
    goBack() {
        this.routerExtensions.backToPreviousPage();
    }
    onArama(){
            TNSPhone.dial(this.names.phone, true);

    }
}
