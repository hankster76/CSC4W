import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';
import * as dialogs from 'ui/dialogs';
import * as email from "nativescript-email";
import 'rxjs/add/operator/switchMap';
import { DirectorService } from '../director.service';
import { isAndroid } from "platform";
declare var android;

@Component({
    selector: 'my-director-details',
    templateUrl: './director-details/director-details.component.html'
})
export class DirectorDetailsComponent implements OnInit{
  
  composeOptions: email.ComposeOptions;

  private directorName: string;
  public director: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private directorService: DirectorService) {
  }

  ngOnInit() {
    this.route.params
      .forEach(params => {
        this.directorName = params['name'];  
        this.director = this.directorService.getDirector(this.directorName);
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
  
  public mailTo(addr: string) {
    var msg: string;
    //dialogs.prompt("Your message").then(r => {
    //  console.log("Message to " + addr + ": " + r.text);
    //  msg = r.text;
    //}); 
    this.composeOptions = {
      subject: "Message from Mobile App",
      to: [addr],
      body: msg
    }

    email.available().then(available => {
      //console.log(`The device email status is ${available}`);
      if(available) {
        email.compose(this.composeOptions).then(result => {
          //console.log(result);
          //console.log('The email was potentially sent!');
        }).catch(error => console.error(error));
      }
    }).catch(error => console.error(error));
  }

  public goBack() {
    this.router.navigate([
      '/home', { outlets: { directoroutlet: ['directors'] } }
    ])
  }
}
