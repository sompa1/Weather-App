import { Component, OnInit, Input} from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() public cities: City[];

  constructor() { }

  ngOnInit() {
  }

}
