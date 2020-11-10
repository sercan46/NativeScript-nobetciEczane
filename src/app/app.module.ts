import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EczaneComponent } from './eczane/eczane.component';
import { HttpClientModule } from "@angular/common/http";
import { EczaneDetailComponent } from './eczane/eczane-detail/eczane-detail.component';
import { EczaneBilgiComponent } from './eczane/eczane-detail/eczane-bilgi/eczane-bilgi.component';
import { MyNameComponent } from './my-name/my-name.component';
import { CalismaSaatleriComponent } from './calisma-saatleri/calisma-saatleri.component';
import { AcilComponent } from './acil/acil.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        EczaneComponent,
        EczaneDetailComponent,
        EczaneBilgiComponent,
        MyNameComponent,
        CalismaSaatleriComponent,
        AcilComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
