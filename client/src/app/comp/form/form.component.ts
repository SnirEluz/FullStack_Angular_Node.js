import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public _data: DataService) { }

  form = {
    customer: 0,
    todobody: ''
  }

  ngOnInit(): void {
  }

}
