import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '.';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventsListComponent {
  events!: IEvent[];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
