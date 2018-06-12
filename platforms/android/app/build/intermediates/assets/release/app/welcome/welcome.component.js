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
