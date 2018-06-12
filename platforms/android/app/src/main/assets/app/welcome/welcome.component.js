"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var application = require("application");
var application_1 = require("application");
var platform_1 = require("platform");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router) {
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!platform_1.isAndroid) {
            return;
        }
        application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            if (_this.router.isActive("/articles", false)) {
                data.cancel = true; // prevents default back button behavior
                //this.logout();
            }
        });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'my-welcome',
            templateUrl: './welcome/welcome.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMseUNBQTJDO0FBQzNDLDJDQUFzRjtBQUN0RixxQ0FBcUM7QUFNckM7SUFHRSwwQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsd0JBQXdCLEVBQUUsVUFBQyxJQUF5QztZQUM1RyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLHdDQUF3QztnQkFDNUQsZ0JBQWdCO1lBQ2xCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoQlUsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7eUNBSTRCLGVBQU07T0FIdkIsZ0JBQWdCLENBaUI1QjtJQUFELHVCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXdlbGNvbWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQge1xuICBwdWJsaWMgc2NoZWR1bGU6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCFpc0FuZHJvaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIGlmICh0aGlzLnJvdXRlci5pc0FjdGl2ZShcIi9hcnRpY2xlc1wiLCBmYWxzZSkpIHtcbiAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlOyAvLyBwcmV2ZW50cyBkZWZhdWx0IGJhY2sgYnV0dG9uIGJlaGF2aW9yXG4gICAgICAgIC8vdGhpcy5sb2dvdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==