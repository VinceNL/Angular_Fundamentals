import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import {ISession} from "../shared/event.model";
import {EventService} from "../shared/event.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions!: ISession[];

  constructor(public auth: AuthService, private  eventService: EventService) {
  }

  ngOnInit(): void {}

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe
    ((sessions: ISession[]) => {
      this.foundSessions = sessions;
    })
  }
}
