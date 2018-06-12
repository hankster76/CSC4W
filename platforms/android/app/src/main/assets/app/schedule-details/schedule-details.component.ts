import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LocateAddress} from "nativescript-locate-address";
import 'rxjs/add/operator/switchMap';
import * as TNSPhone from 'nativescript-phone';
import * as permissions from "nativescript-permissions";
import { isAndroid } from "platform";
import * as utils from "utils/utils";
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { ScheduleService } from '../schedule.service';
declare var android;

@Component({
    selector: 'my-schedule-details',
    templateUrl: './schedule-details/schedule-details.component.html'
})
export class ScheduleDetailsComponent implements OnInit{
  private event: string;
  public schedule: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.route.params
      .forEach(params => {
        this.event = params['name'];  
        this.schedule = this.scheduleService.getEvent(this.event);
      }); 
  }

  public tapAddr(addr: string) {
    //console.log(addr);
    // instantiate the plugin 
    let locator = new LocateAddress();
    locator.locate({
      address: addr,
      }).then(() => {
        //console.log("Maps app launched.");
      }, (error) => {
        //console.log(error);
    });    
  }

  public tapLatLong(lat: number, long: number) {
    //console.log(addr);
    // instantiate the plugin 
    let locator = new LocateAddress();
    locator.locate({
      lat: lat,
      lng: long
      }).then(() => {
        //console.log("Maps app launched.");
      }, (error) => {
        //console.log(error);
    });    
  }

  public call(phnum: string) {
    //console.log("Ready to dial");
    if (phnum!=null&&phnum!="") {
      if (isAndroid) {
        permissions.requestPermission(android.Manifest.permission.CALL_PHONE, 
          "App Needs This Permission To Make Phone Calls")
          .then(()=>{
            //console.log("Got Permission!");
            //console.log(phnum);
            TNSPhone.dial(String(phnum), false);
          })
          .catch(()=>{
          console.log("Permission Denied!");
        });
      } else {
        TNSPhone.dial(String(phnum), false);
      }
    }
  }

  public goBack() {
    this.router.navigate([
      '/home', { outlets: { scheduleoutlet: ['schedule'] } }
    ])
  }
}
