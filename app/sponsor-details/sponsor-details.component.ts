import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LocateAddress} from "nativescript-locate-address";
import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';
import 'rxjs/add/operator/switchMap';
import * as email from "nativescript-email";
import { SponsorService } from '../sponsor.service';
import { isAndroid } from "platform";
import * as utils from "utils/utils";
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";

declare var android;

@Component({
    selector: 'my-sponsor-details',
    templateUrl: './sponsor-details/sponsor-details.component.html'
})
export class SponsorDetailsComponent implements OnInit{
  composeOptions: email.ComposeOptions;
  private sponsorName: string;
  public sponsor: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sponsorService: SponsorService) {
  }

  ngOnInit() {
    this.route.params
      .forEach(params => {
        this.sponsorName = params['name'];  
        this.sponsor = this.sponsorService.getSponsor(this.sponsorName);
      }); 
//      if (!isAndroid) {
//        return;
//      }
//      application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
//        //if (this.router.isActive("sponsoroutlet", false)) {
//          console.log("disable back button");
//          data.cancel = true; // prevents default back button behavior
//      });
        
  }

  public goBack() {
    this.router.navigate([
      '/home', { outlets: { sponsoroutlet: ['sponsors'] } }
    ])
  }

  public email(addr: string) {
    var msg: string;
    this.composeOptions = {
      subject: "A Message from the CSC4W Mobile App",
      to: [addr],
      body: msg
    }
    email.available().then(available => {
      //console.log(`The device email status is ${available}`);
      if(available) {
        email.compose(this.composeOptions).then(result => {
         // console.log(result);
          //console.log('The email was potentially sent!');
        }).catch(error => console.error(error));
      }
    }).catch(error => console.error(error));
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
        console.log(error);
    });    
  }
  public call(phnum: string) {
    //console.log("Ready to dial");

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

  public launch(url: string) {
    utils.openUrl(url);
  }
}
