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
