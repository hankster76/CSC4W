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
