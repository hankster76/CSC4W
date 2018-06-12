import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
    selector: 'my-schedule',
    templateUrl: './schedule/schedule.component.html'
})
export class ScheduleComponent {
  public schedule: Array<any>;

  constructor(private router: Router, private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.schedule = this.scheduleService.getSchedule();
  }

  navigateToDetails(name: string) {
    this.router.navigate([
      '/home', { outlets: { scheduleoutlet: ['schedule', name] } }
    ])
  }
}