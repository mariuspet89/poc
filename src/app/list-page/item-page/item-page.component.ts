import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Announcement} from './announcement.model';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
})
export class ItemPageComponent {
  @Input() announcement: Announcement | null = null;
  @Output() announcementClick: EventEmitter<Announcement | null> =
    new EventEmitter<Announcement | null>();

  markedAsRead() {
    if (!this.announcement?.read) {
      this.announcementClick.emit(this.announcement);
    }

  }
}
