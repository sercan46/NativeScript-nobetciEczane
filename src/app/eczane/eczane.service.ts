import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Eczane } from "./eczane";

@Injectable({ providedIn: "root" })
export class EczaneService {
    constructor(private httpService: HttpClient) {}
    sehireGöreEczane: any;
 c:any;
    getEczane(sehirAdi): any {
        console.log("sehiradiii", sehirAdi);
        const httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization:
                    "apikey 5jlfyRN3xJphzTu2FMUJMb:5aSWrFupFeewcO4FE3eme6",
            }),
        };
        return this.httpService
            .get(
                "https://api.collectapi.com/health/dutyPharmacy?&il=" +
                    sehirAdi,
                httpOptions
            )
            .pipe(
                map((x) => {
                    this.sehireGöreEczane = x["result"];
                    return x;
                })
            );
    }
    getDetailler(name:string): Eczane {
        let c = name.substr(1);

        this.c= this.sehireGöreEczane.filter((item) => {
             return item.name === c;
        })[0];
        console.log("asdasd",this.c)
        return this.c
    }
}
