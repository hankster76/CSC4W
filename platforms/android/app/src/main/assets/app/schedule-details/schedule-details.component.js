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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2hlZHVsZS1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsMkVBQTBEO0FBQzFELHVDQUFxQztBQUNyQyw2Q0FBK0M7QUFDL0Msc0RBQXdEO0FBQ3hELHFDQUFxQztBQUlyQyx3REFBc0Q7QUFPdEQ7SUFJRSxrQ0FDVSxLQUFxQixFQUNyQixNQUFjLEVBQ2QsZUFBZ0M7UUFGaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUMxQyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNiLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDBDQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3pCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLE9BQU8sRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLG9DQUFvQztRQUN0QyxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ1AscUJBQXFCO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDZDQUFVLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxJQUFZO1FBQ3pDLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLEdBQUcsRUFBRSxHQUFHO1lBQ1IsR0FBRyxFQUFFLElBQUk7U0FDUixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sb0NBQW9DO1FBQ3RDLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxxQkFBcUI7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sdUNBQUksR0FBWCxVQUFZLEtBQWE7UUFDdkIsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUUsS0FBSyxJQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFDbEUsK0NBQStDLENBQUM7cUJBQy9DLElBQUksQ0FBQztvQkFDSixpQ0FBaUM7b0JBQ2pDLHFCQUFxQjtvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUM7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTSx5Q0FBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTtTQUN2RCxDQUFDLENBQUE7SUFDSixDQUFDO0lBckVVLHdCQUF3QjtRQUpwQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsb0RBQW9EO1NBQ3BFLENBQUM7eUNBTWlCLHVCQUFjO1lBQ2IsZUFBTTtZQUNHLGtDQUFlO09BUC9CLHdCQUF3QixDQXNFcEM7SUFBRCwrQkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TG9jYXRlQWRkcmVzc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhdGUtYWRkcmVzc1wiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcbmltcG9ydCAqIGFzIHBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFNjaGVkdWxlU2VydmljZSB9IGZyb20gJy4uL3NjaGVkdWxlLnNlcnZpY2UnO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zY2hlZHVsZS1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2NoZWR1bGUtZGV0YWlscy9zY2hlZHVsZS1kZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZURldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHByaXZhdGUgZXZlbnQ6IHN0cmluZztcbiAgcHVibGljIHNjaGVkdWxlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHNjaGVkdWxlU2VydmljZTogU2NoZWR1bGVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5ldmVudCA9IHBhcmFtc1snbmFtZSddOyAgXG4gICAgICAgIHRoaXMuc2NoZWR1bGUgPSB0aGlzLnNjaGVkdWxlU2VydmljZS5nZXRFdmVudCh0aGlzLmV2ZW50KTtcbiAgICAgIH0pOyBcbiAgfVxuXG4gIHB1YmxpYyB0YXBBZGRyKGFkZHI6IHN0cmluZykge1xuICAgIC8vY29uc29sZS5sb2coYWRkcik7XG4gICAgLy8gaW5zdGFudGlhdGUgdGhlIHBsdWdpbiBcbiAgICBsZXQgbG9jYXRvciA9IG5ldyBMb2NhdGVBZGRyZXNzKCk7XG4gICAgbG9jYXRvci5sb2NhdGUoe1xuICAgICAgYWRkcmVzczogYWRkcixcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiTWFwcyBhcHAgbGF1bmNoZWQuXCIpO1xuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pOyAgICBcbiAgfVxuXG4gIHB1YmxpYyB0YXBMYXRMb25nKGxhdDogbnVtYmVyLCBsb25nOiBudW1iZXIpIHtcbiAgICAvL2NvbnNvbGUubG9nKGFkZHIpO1xuICAgIC8vIGluc3RhbnRpYXRlIHRoZSBwbHVnaW4gXG4gICAgbGV0IGxvY2F0b3IgPSBuZXcgTG9jYXRlQWRkcmVzcygpO1xuICAgIGxvY2F0b3IubG9jYXRlKHtcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsb25nXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTsgICAgXG4gIH1cblxuICBwdWJsaWMgY2FsbChwaG51bTogc3RyaW5nKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIlJlYWR5IHRvIGRpYWxcIik7XG4gICAgaWYgKHBobnVtIT1udWxsJiZwaG51bSE9XCJcIikge1xuICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICBwZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uQ0FMTF9QSE9ORSwgXG4gICAgICAgICAgXCJBcHAgTmVlZHMgVGhpcyBQZXJtaXNzaW9uIFRvIE1ha2UgUGhvbmUgQ2FsbHNcIilcbiAgICAgICAgICAudGhlbigoKT0+e1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkdvdCBQZXJtaXNzaW9uIVwiKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGhudW0pO1xuICAgICAgICAgICAgVE5TUGhvbmUuZGlhbChTdHJpbmcocGhudW0pLCBmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gRGVuaWVkIVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBUTlNQaG9uZS5kaWFsKFN0cmluZyhwaG51bSksIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICcvaG9tZScsIHsgb3V0bGV0czogeyBzY2hlZHVsZW91dGxldDogWydzY2hlZHVsZSddIH0gfVxuICAgIF0pXG4gIH1cbn1cbiJdfQ==