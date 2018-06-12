import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SponsorService } from '../sponsor.service';
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { isAndroid } from "platform";

@Component({
    selector: 'my-sponsors',
    templateUrl: './sponsors/sponsors.component.html'
})
export class SponsorsComponent {
  public sponsors: Array<any>;

  constructor(private router: Router, private sponsorService: SponsorService) {
  }

  ngOnInit() {
    this.sponsors = this.sponsorService.getSponsors();
    if (!isAndroid) {
      return;
    }
    application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
      if (this.router.isActive("sponsors", false)) {
        data.cancel = true; // prevents default back button behavior
        //this.logout();
      }
    });
  }

  navigateToDetails(name: string) {
    this.router.navigate([
      '/home', { outlets: { sponsoroutlet: ['sponsors', name] } }
    ])
  }
}