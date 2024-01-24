import {NgModule} from "@angular/core";
import {TableComponent} from "./table.component";
import {ButtonModule} from "../button/button.module";

// Module is :  `Technical details`
@NgModule(
  {
    declarations:[TableComponent],
    exports:[TableComponent],
    imports: [ButtonModule]
  }
)
export class TableModule{}
