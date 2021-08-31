import {Component, OnInit} from '@angular/core';

import {Announcement} from "./item-page/announcement.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public itemList: Announcement[] = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  getPosts() {
    return this.http.get<Announcement[]>('http://localhost:3000/api/v1/announcements')
      .subscribe(
        (response: Announcement[]) => {
          this.itemList = response;
            console.log(response)
        }
      );
  }


}
