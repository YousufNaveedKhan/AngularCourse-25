import { RouterModule, Routes } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Services } from "./services/services";
import { Contact } from "./contact/contact";
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'services', component: Services },
    { path: 'contact', component: Contact }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


