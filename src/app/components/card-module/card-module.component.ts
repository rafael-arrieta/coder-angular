import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-module',
  templateUrl: './card-module.component.html',
  styleUrls: ['./card-module.component.scss']
})
export class CardModuleComponent implements OnInit {

  porcentaje: number = 45;
  constructor() { }

  ngOnInit(): void {
  }

}
