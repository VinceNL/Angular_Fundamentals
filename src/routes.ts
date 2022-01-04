import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import {
  EventDetailsComponent,
  CreateEventComponent,
  EventsListComponent,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
} from './app/events/index';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('./app/user/user.module').then((m) => m.UserModule),
  },
];
