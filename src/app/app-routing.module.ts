import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { EczaneComponent } from "./eczane/eczane.component";
import { EczaneDetailComponent } from "./eczane/eczane-detail/eczane-detail.component";
import { EczaneBilgiComponent } from "./eczane/eczane-detail/eczane-bilgi/eczane-bilgi.component";
import { MyNameComponent } from "./my-name/my-name.component";
import { CalismaSaatleriComponent } from "./calisma-saatleri/calisma-saatleri.component";
import { AcilComponent } from "./acil/acil.component";

const routes: Routes = [
    { path: "", component:MyNameComponent, pathMatch: "full" },
    { path:"calisma-saati",component:CalismaSaatleriComponent},
    { path:"acil",component:AcilComponent},
    { path:"eczane",component:EczaneComponent},
    { path:"item/:plaka",component:EczaneDetailComponent},
    { path:"item/plaka/:name",component:EczaneBilgiComponent},

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
