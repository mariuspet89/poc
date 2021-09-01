import {Component, OnInit} from '@angular/core';

import {Announcement} from "./item-page/announcement.model";
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
    this.getPosts();
  }

  announcementClick(item: Announcement|null){
    //console.warn(item);
    if(item){
     this.http
      .get<Announcement>(
        'http://localhost:3000/api/v1/announcements/mark-as-read/' + item.id)
      .subscribe((responseItem) => {
        responseItem.read = true;
        this.itemList.splice(this.itemList.indexOf(item), 1, responseItem);
        console.log(responseItem);
      });
    }
  }

 private getPosts() {
    this.http.get<Announcement[]>('http://localhost:3000/api/v1/announcements')
      .subscribe(
        (response: Announcement[]) => {
          this.itemList = response;
          console.log(response)
        }
      );
  }




}
