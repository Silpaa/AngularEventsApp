import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { CreateComponent } from './events/create.component';
import { RouteActivatorService } from './events/route-activator.service';
import { Error404Component } from './events/error/error404.component';
import { ListResolverService } from './events/shared/list-resolver.service';

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events:ListResolverService }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
