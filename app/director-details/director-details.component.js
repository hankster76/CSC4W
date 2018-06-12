"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var permissions = require("nativescript-permissions");
var TNSPhone = require("nativescript-phone");
var email = require("nativescript-email");
require("rxjs/add/operator/switchMap");
var director_service_1 = require("../director.service");
var platform_1 = require("platform");
var DirectorDetailsComponent = /** @class */ (function () {
    function DirectorDetailsComponent(route, router, directorService) {
        this.route = route;
        this.router = router;
        this.directorService = directorService;
    }
    DirectorDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .forEach(function (params) {
            _this.directorName = params['name'];
            _this.director = _this.directorService.getDirector(_this.directorName);
        });
    };
    DirectorDetailsComponent.prototype.call = function (phnum) {
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
    DirectorDetailsComponent.prototype.mailTo = function (addr) {
        var _this = this;
        var msg;
        //dialogs.prompt("Your message").then(r => {
        //  console.log("Message to " + addr + ": " + r.text);
        //  msg = r.text;
        //}); 
        this.composeOptions = {
            subject: "Message from Mobile App",
            to: [addr],
            body: msg
        };
        email.available().then(function (available) {
            //console.log(`The device email status is ${available}`);
            if (available) {
                email.compose(_this.composeOptions).then(function (result) {
                    //console.log(result);
                    //console.log('The email was potentially sent!');
                }).catch(function (error) { return console.error(error); });
            }
        }).catch(function (error) { return console.error(error); });
    };
    DirectorDetailsComponent.prototype.goBack = function () {
        this.router.navigate([
            '/home', { outlets: { directoroutlet: ['directors'] } }
        ]);
    };
    DirectorDetailsComponent = __decorate([
        core_1.Component({
            selector: 'my-director-details',
            templateUrl: './director-details/director-details.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            director_service_1.DirectorService])
    ], DirectorDetailsComponent);
    return DirectorDetailsComponent;
}());
exports.DirectorDetailsComponent = DirectorDetailsComponent;
