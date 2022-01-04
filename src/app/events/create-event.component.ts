import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '.';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  NewEvent: any;

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    this.NewEvent = {
      name: '',
      date: '',
      time: '',
      price: '',
      location: {
        address: '',
        city: '',
        country: ''
      },
      onlineUrl: '',
      imageUrl: ''
    }
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
