"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_locate_address_1 = require("nativescript-locate-address");
require("rxjs/add/operator/switchMap");
var TNSPhone = require("nativescript-phone");
var permissions = require("nativescript-permissions");
var platform_1 = require("platform");
var schedule_service_1 = require("../schedule.service");
var ScheduleDetailsComponent = /** @class */ (function () {
    function ScheduleDetailsComponent(route, router, scheduleService) {
        this.route = route;
        this.router = router;
        this.scheduleService = scheduleService;
    }
    ScheduleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .forEach(function (params) {
            _this.event = params['name'];
            _this.schedule = _this.scheduleService.getEvent(_this.event);
        });
    };
    ScheduleDetailsComponent.prototype.tapAddr = function (addr) {
        //console.log(addr);
        // instantiate the plugin 
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.locate({
            address: addr,
        }).then(function () {
            //console.log("Maps app launched.");
        }, function (error) {
            //console.log(error);
        });
    };
    ScheduleDetailsComponent.prototype.tapLatLong = function (lat, long) {
        //console.log(addr);
        // instantiate the plugin 
        var locator = new nativescript_locate_address_1.LocateAddress();
        locator.locate({
            lat: lat,
            lng: long
        }).then(function () {
            //console.log("Maps app launched.");
        }, function (error) {
            //console.log(error);
        });
    };
    ScheduleDetailsComponent.prototype.call = function (phnum) {
        //console.log("Ready to dial");
        if (phnum != null && phnum != "") {
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
        }
    };
    ScheduleDetailsComponent.prototype.goBack = function () {
        this.router.navigate([
            '/home', { outlets: { scheduleoutlet: ['schedule'] } }
        ]);
    };
    ScheduleDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-schedule-details',
            templateUrl: './schedule-details/schedule-details.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            schedule_service_1.ScheduleService])
    ], ScheduleDetailsComponent);
    return ScheduleDetailsComponent;
}());
exports.ScheduleDetailsComponent = ScheduleDetailsComponent;
