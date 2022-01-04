import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {registerLocaleData} from '@angular/common';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeNl);

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator
} from './events';
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  CollapsibleWellComponent,
  Toastr,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common";
import {EventsAppComponent} from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
import {appRoutes} from 'src/routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './event-details/create-session.component';
import {SessionListComponent} from './event-details/session-list.component';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    ModalTriggerDirective,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
    {
      provide: LOCALE_ID,
      useValue: 'nl-NL'
    }
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
