import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isAndroid } from "platform";
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";

@Component({
    selector: 'my-home',
    templateUrl: './home/home.component.html'
})
export class HomeComponent {
  public selectedIndex: number = 0;
  
  constructor(private router: Router) {
  }

  ngOnInit() {
      if (!isAndroid) {
        return;
      }
      application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
        //if (this.router.isActive("sponsoroutlet", false)) {
          //console.log("disable back button");
          data.cancel = true; // prevents default back button behavior
          //this.logout();
        //}
      });
    }
}




