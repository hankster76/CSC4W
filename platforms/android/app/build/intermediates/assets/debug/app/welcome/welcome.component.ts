import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { isAndroid } from "platform";

@Component({
    selector: 'my-welcome',
    templateUrl: './welcome/welcome.component.html'
})
export class WelcomeComponent {
  public schedule: Array<any>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (!isAndroid) {
      return;
    }
    application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
      if (this.router.isActive("/articles", false)) {
        data.cancel = true; // prevents default back button behavior
        //this.logout();
      }
    });
  }
}