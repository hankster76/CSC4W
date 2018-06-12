"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sponsor_service_1 = require("../sponsor.service");
var application = require("application");
var application_1 = require("application");
var platform_1 = require("platform");
var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent(router, sponsorService) {
        this.router = router;
        this.sponsorService = sponsorService;
    }
    SponsorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sponsors = this.sponsorService.getSponsors();
        if (!platform_1.isAndroid) {
            return;
        }
        application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            if (_this.router.isActive("sponsors", false)) {
                data.cancel = true; // prevents default back button behavior
                //this.logout();
            }
        });
    };
    SponsorsComponent.prototype.navigateToDetails = function (name) {
        this.router.navigate([
            '/home', { outlets: { sponsoroutlet: ['sponsors', name] } }
        ]);
    };
    SponsorsComponent = __decorate([
        core_1.Component({
            selector: 'my-sponsors',
            templateUrl: './sponsors/sponsors.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, sponsor_service_1.SponsorService])
    ], SponsorsComponent);
    return SponsorsComponent;
}());
exports.SponsorsComponent = SponsorsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvbnNvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BvbnNvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxzREFBb0Q7QUFDcEQseUNBQTJDO0FBQzNDLDJDQUFzRjtBQUN0RixxQ0FBcUM7QUFNckM7SUFHRSwyQkFBb0IsTUFBYyxFQUFVLGNBQThCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDMUUsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUFrQixDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBeUM7WUFDNUcsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyx3Q0FBd0M7Z0JBQzVELGdCQUFnQjtZQUNsQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7U0FDNUQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQXZCVSxpQkFBaUI7UUFKN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxvQ0FBb0M7U0FDcEQsQ0FBQzt5Q0FJNEIsZUFBTSxFQUEwQixnQ0FBYztPQUgvRCxpQkFBaUIsQ0F3QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNwb25zb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc3BvbnNvci5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc3BvbnNvcnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3BvbnNvcnNDb21wb25lbnQge1xuICBwdWJsaWMgc3BvbnNvcnM6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzcG9uc29yU2VydmljZTogU3BvbnNvclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3BvbnNvcnMgPSB0aGlzLnNwb25zb3JTZXJ2aWNlLmdldFNwb25zb3JzKCk7XG4gICAgaWYgKCFpc0FuZHJvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIGlmICh0aGlzLnJvdXRlci5pc0FjdGl2ZShcInNwb25zb3JzXCIsIGZhbHNlKSkge1xuICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7IC8vIHByZXZlbnRzIGRlZmF1bHQgYmFjayBidXR0b24gYmVoYXZpb3JcbiAgICAgICAgLy90aGlzLmxvZ291dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmF2aWdhdGVUb0RldGFpbHMobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgJy9ob21lJywgeyBvdXRsZXRzOiB7IHNwb25zb3JvdXRsZXQ6IFsnc3BvbnNvcnMnLCBuYW1lXSB9IH1cbiAgICBdKVxuICB9XG59Il19