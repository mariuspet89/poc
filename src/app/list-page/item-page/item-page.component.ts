import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Announcement} from "./announcement.model";
import {map} from "rxjs/operators";
import {ListPageComponent} from "../list-page.component";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

@Input() announcement!: Announcement;
@Input() index!: number;

  constructor() {
  }

  ngOnInit(): void {
  }


}
