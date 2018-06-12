"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_1 = require("platform");
var application = require("application");
var application_1 = require("application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.selectedIndex = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!platform_1.isAndroid) {
            return;
        }
        application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            //if (this.router.isActive("sponsoroutlet", false)) {
            //console.log("disable back button");
            data.cancel = true; // prevents default back button behavior
            //this.logout();
            //}
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: './home/home.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMscUNBQXFDO0FBQ3JDLHlDQUEyQztBQUMzQywyQ0FBc0Y7QUFNdEY7SUFHRSx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGM0Isa0JBQWEsR0FBVyxDQUFDLENBQUM7SUFHakMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBeUM7WUFDNUcscURBQXFEO1lBQ25ELHFDQUFxQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLHdDQUF3QztZQUM1RCxnQkFBZ0I7WUFDbEIsR0FBRztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpCUSxhQUFhO1FBSnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7eUNBSTRCLGVBQU07T0FIdkIsYUFBYSxDQWtCekI7SUFBRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDA7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICghaXNBbmRyb2lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgKGRhdGE6IEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIC8vaWYgKHRoaXMucm91dGVyLmlzQWN0aXZlKFwic3BvbnNvcm91dGxldFwiLCBmYWxzZSkpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGlzYWJsZSBiYWNrIGJ1dHRvblwiKTtcbiAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7IC8vIHByZXZlbnRzIGRlZmF1bHQgYmFjayBidXR0b24gYmVoYXZpb3JcbiAgICAgICAgICAvL3RoaXMubG9nb3V0KCk7XG4gICAgICAgIC8vfVxuICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuXG4iXX0=