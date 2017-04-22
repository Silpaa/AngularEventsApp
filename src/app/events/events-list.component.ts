import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'event-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

events:any[]

constructor(private route:ActivatedRoute) {
}

  ngOnInit() {
  console.log("ngOnInit()")
    this.events = this.route.snapshot.data['events'];
  }

}
