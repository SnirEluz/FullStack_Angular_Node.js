import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mission4snieluz';

  constructor(
    public _data: DataService
  ) { }

  ngOnInit(): void {
    this._data.getTodos()
    this._data.getCustomer()
  }
}
