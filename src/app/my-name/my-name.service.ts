import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({   providedIn: "root"}
)
export class CoronaService{
    constructor (private httpService:HttpClient){}
    getCorona():any{
                return this.httpService.get('https://api.covid19api.com/summary').pipe(map(x=>{

                        return x["Countries"][227];
                }))
    }

}
