import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {AboutComponent} from "./about/about.component";
import {ReportComponent} from "./report/report.component";
import {YuriComponent} from "./yuri/yuri.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'report', component: ReportComponent},
  {path: 'golan', component: YuriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {
}
