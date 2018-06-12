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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvbnNvci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwb25zb3ItZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDJFQUEwRDtBQUMxRCxzREFBd0Q7QUFDeEQsNkNBQStDO0FBQy9DLHVDQUFxQztBQUNyQywwQ0FBNEM7QUFDNUMsc0RBQW9EO0FBQ3BELHFDQUFxQztBQUNyQyxtQ0FBcUM7QUFVckM7SUFLRSxpQ0FDVSxLQUFxQixFQUNyQixNQUFjLEVBQ2QsY0FBOEI7UUFGOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUN4QyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNiLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBQ1QseUJBQXlCO1FBQ3pCLGlCQUFpQjtRQUNqQixTQUFTO1FBQ1QsNEhBQTRIO1FBQzVILCtEQUErRDtRQUMvRCwrQ0FBK0M7UUFDL0Msd0VBQXdFO1FBQ3hFLFdBQVc7SUFFVCxDQUFDO0lBRU0sd0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7U0FDdEQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLHVDQUFLLEdBQVosVUFBYSxJQUFZO1FBQXpCLGlCQWdCQztRQWZDLElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsT0FBTyxFQUFFLHFDQUFxQztZQUM5QyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDVixJQUFJLEVBQUUsR0FBRztTQUNWLENBQUE7UUFDRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUztZQUM5Qix5REFBeUQ7WUFDekQsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUM3Qyx1QkFBdUI7b0JBQ3RCLGlEQUFpRDtnQkFDbkQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLHlDQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3pCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNiLE9BQU8sRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNOLG9DQUFvQztRQUN0QyxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxzQ0FBSSxHQUFYLFVBQVksS0FBYTtRQUN2QiwrQkFBK0I7UUFFL0IsRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUNsRSwrQ0FBK0MsQ0FBQztpQkFDL0MsSUFBSSxDQUFDO2dCQUNKLGlDQUFpQztnQkFDakMscUJBQXFCO2dCQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRU0sd0NBQU0sR0FBYixVQUFjLEdBQVc7UUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBckZVLHVCQUF1QjtRQUpuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsa0RBQWtEO1NBQ2xFLENBQUM7eUNBT2lCLHVCQUFjO1lBQ2IsZUFBTTtZQUNFLGdDQUFjO09BUjdCLHVCQUF1QixDQXNGbkM7SUFBRCw4QkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TG9jYXRlQWRkcmVzc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhdGUtYWRkcmVzc1wiO1xuaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCAqIGFzIGVtYWlsIGZyb20gXCJuYXRpdmVzY3JpcHQtZW1haWxcIjtcbmltcG9ydCB7IFNwb25zb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc3BvbnNvci5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zcG9uc29yLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcG9uc29yLWRldGFpbHMvc3BvbnNvci1kZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTcG9uc29yRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgY29tcG9zZU9wdGlvbnM6IGVtYWlsLkNvbXBvc2VPcHRpb25zO1xuICBwcml2YXRlIHNwb25zb3JOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBzcG9uc29yOiBhbnk7XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgc3BvbnNvclNlcnZpY2U6IFNwb25zb3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5zcG9uc29yTmFtZSA9IHBhcmFtc1snbmFtZSddOyAgXG4gICAgICAgIHRoaXMuc3BvbnNvciA9IHRoaXMuc3BvbnNvclNlcnZpY2UuZ2V0U3BvbnNvcih0aGlzLnNwb25zb3JOYW1lKTtcbiAgICAgIH0pOyBcbi8vICAgICAgaWYgKCFpc0FuZHJvaWQpIHtcbi8vICAgICAgICByZXR1cm47XG4vLyAgICAgIH1cbi8vICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbi8vICAgICAgICAvL2lmICh0aGlzLnJvdXRlci5pc0FjdGl2ZShcInNwb25zb3JvdXRsZXRcIiwgZmFsc2UpKSB7XG4vLyAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc2FibGUgYmFjayBidXR0b25cIik7XG4vLyAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7IC8vIHByZXZlbnRzIGRlZmF1bHQgYmFjayBidXR0b24gYmVoYXZpb3Jcbi8vICAgICAgfSk7XG4gICAgICAgIFxuICB9XG5cbiAgcHVibGljIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAnL2hvbWUnLCB7IG91dGxldHM6IHsgc3BvbnNvcm91dGxldDogWydzcG9uc29ycyddIH0gfVxuICAgIF0pXG4gIH1cblxuICBwdWJsaWMgZW1haWwoYWRkcjogc3RyaW5nKSB7XG4gICAgdmFyIG1zZzogc3RyaW5nO1xuICAgIHRoaXMuY29tcG9zZU9wdGlvbnMgPSB7XG4gICAgICBzdWJqZWN0OiBcIkEgTWVzc2FnZSBmcm9tIHRoZSBDU0M0VyBNb2JpbGUgQXBwXCIsXG4gICAgICB0bzogW2FkZHJdLFxuICAgICAgYm9keTogbXNnXG4gICAgfVxuICAgIGVtYWlsLmF2YWlsYWJsZSgpLnRoZW4oYXZhaWxhYmxlID0+IHtcbiAgICAgIC8vY29uc29sZS5sb2coYFRoZSBkZXZpY2UgZW1haWwgc3RhdHVzIGlzICR7YXZhaWxhYmxlfWApO1xuICAgICAgaWYoYXZhaWxhYmxlKSB7XG4gICAgICAgIGVtYWlsLmNvbXBvc2UodGhpcy5jb21wb3NlT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdUaGUgZW1haWwgd2FzIHBvdGVudGlhbGx5IHNlbnQhJyk7XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIH1cblxuICBwdWJsaWMgdGFwQWRkcihhZGRyOiBzdHJpbmcpIHtcbiAgICAvL2NvbnNvbGUubG9nKGFkZHIpO1xuICAgIC8vIGluc3RhbnRpYXRlIHRoZSBwbHVnaW4gXG4gICAgbGV0IGxvY2F0b3IgPSBuZXcgTG9jYXRlQWRkcmVzcygpO1xuICAgIGxvY2F0b3IubG9jYXRlKHtcbiAgICAgIGFkZHJlc3M6IGFkZHIsXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIk1hcHMgYXBwIGxhdW5jaGVkLlwiKTtcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7ICAgIFxuICB9XG4gIHB1YmxpYyBjYWxsKHBobnVtOiBzdHJpbmcpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiUmVhZHkgdG8gZGlhbFwiKTtcblxuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIHBlcm1pc3Npb25zLnJlcXVlc3RQZXJtaXNzaW9uKGFuZHJvaWQuTWFuaWZlc3QucGVybWlzc2lvbi5DQUxMX1BIT05FLCBcbiAgICAgICAgXCJBcHAgTmVlZHMgVGhpcyBQZXJtaXNzaW9uIFRvIE1ha2UgUGhvbmUgQ2FsbHNcIilcbiAgICAgICAgLnRoZW4oKCk9PntcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiR290IFBlcm1pc3Npb24hXCIpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2cocGhudW0pO1xuICAgICAgICAgIFROU1Bob25lLmRpYWwoU3RyaW5nKHBobnVtKSwgZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCk9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJQZXJtaXNzaW9uIERlbmllZCFcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgVE5TUGhvbmUuZGlhbChTdHJpbmcocGhudW0pLCBmYWxzZSk7XG4gICAgfVxuICB9ICBcblxuICBwdWJsaWMgbGF1bmNoKHVybDogc3RyaW5nKSB7XG4gICAgdXRpbHMub3BlblVybCh1cmwpO1xuICB9XG59XG4iXX0=