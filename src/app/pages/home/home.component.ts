import { Component, OnInit } from '@angular/core';
import data from '../../shared/json/collapse-info.json';
import { Collapse } from '../../shared/interfaces/collapse-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  arrayOfText : Collapse[] = data;
  ngOnInit(): void {}
}
