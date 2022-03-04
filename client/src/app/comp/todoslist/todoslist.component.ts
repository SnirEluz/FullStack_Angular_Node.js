import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.scss']
})
export class TodoslistComponent implements OnInit {

  constructor(public _data:DataService) { }

  ngOnInit(): void {
  }

}
