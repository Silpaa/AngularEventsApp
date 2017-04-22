import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateComponent } from './events/create.component';
import { Error404Component } from './events/error/error404.component';
import { RouteActivatorService } from './events/route-activator.service';
import { ListResolverService } from './events/shared/list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      EventService,
      RouteActivatorService,
      ListResolverService,
      {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      }],
  bootstrap: [AppComponent]
})
export class AppModule {}
  function checkDirtyState(component:CreateComponent){
    if(component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
  }
