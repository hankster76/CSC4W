"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_locate_address_1 = require("nativescript-locate-address");
var permissions = require("nativescript-permissions");
var TNSPhone = require("nativescript-phone");
require("rxjs/add/operator/switchMap");
var email = require("nativescript-email");
var sponsor_service_1 = require("../sponsor.service");
var platform_1 = require("platform");
var utils = require("utils/utils");
var SponsorDetailsComponent = /** @class */ (function () {
    function SponsorDetailsComponent(route, router, sponsorService) {
        this.route = route;
        this.router = router;
        this.sponsorService = sponsorService;
    }
    SponsorDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .forEach(function (params) {
            _this.sponsorName = params['name'];
            _this.sponsor = _this.sponsorService.getSponsor(_this.sponsorName);
        });
        //      if (!isAndroid) {
        //        return;
        //      }
        //      application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
        //        //if (this.router.isActive("sponsoroutlet", false)) {
        //          console.log("disable back button");
        //          data.cancel = true; // prevents default back button behavior
        //      });
    };
    SponsorDetailsComponent.prototype.goBack = function () {
        this.router.navigate([
            '/home', { outlets: { sponsoroutlet: ['sponsors'] } }
        ]);
    };
    SponsorDetailsComponent.prototype.email = function (addr) {
        var _this = this;
        var msg;
        this.composeOptions = {
            subject: "A Message from the CSC4W Mobile App",
            to: [addr],
            body: msg
        };
        email.available().then(function (available) {
            //console.log(`The device email status is ${available}`);
            if (available) {
                email.compose(_this.composeOptions).then(function (result) {
                    // console.log(result);
                    //console.log('The email was potentially sent!');
                }).catch(function (error) { return console.error(error); });
            }
        }).catch(function (error) { return console.error(error); });
    };
    SponsorDetailsComponent.prototype.tapAddr = function (addr) {
        //console.log(addr);
        // instantiate the plugin 
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.locate({
            address: addr,
        }).then(function () {
            //console.log("Maps app launched.");
        }, function (error) {
            console.log(error);
        });
    };
    SponsorDetailsComponent.prototype.call = function (phnum) {
        //console.log("Ready to dial");
        if (platform_1.isAndroid) {
            permissions.requestPermission(android.Manifest.permission.CALL_PHONE, "App Needs This Permission To Make Phone Calls")
                .then(function () {
                //console.log("Got Permission!");
                //console.log(phnum);
                TNSPhone.dial(String(phnum), false);
            })
                .catch(function () {
                console.log("Permission Denied!");
            });
        }
        else {
            TNSPhone.dial(String(phnum), false);
        }
    };
    SponsorDetailsComponent.prototype.launch = function (url) {
        utils.openUrl(url);
    };
    SponsorDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-sponsor-details',
            templateUrl: './sponsor-details/sponsor-details.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            sponsor_service_1.SponsorService])
    ], SponsorDetailsComponent);
    return SponsorDetailsComponent;
}());
exports.SponsorDetailsComponent = SponsorDetailsComponent;
