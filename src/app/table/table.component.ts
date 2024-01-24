import {Component} from "@angular/core";

@Component({
  selector:'app-table-info',
  template:`
      <h2>Yonatan</h2>
      <ui-button></ui-button>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Yonatan</td>
          <td>Altman</td>
          <td>yonatane-square.io</td>
        </tr>
        </tbody>
      </table>`,
  styles:[`
    table {
      thead {
        background-color: gray;
      }
    }

  `]
})
export class TableComponent {
  title:string = 'My table';
}
