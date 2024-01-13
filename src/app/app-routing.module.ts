import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./first-module/first-component/first-component.component";
import { SecondComponentComponent } from "./second-module/second-component/second-component.component";


const routes: Routes = [
    { path: '', component: FirstComponentComponent },
    { path: 'second', component: SecondComponentComponent },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }