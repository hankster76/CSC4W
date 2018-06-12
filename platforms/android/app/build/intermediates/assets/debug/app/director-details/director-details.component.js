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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3ItZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXJlY3Rvci1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsc0RBQXdEO0FBQ3hELDZDQUErQztBQUUvQywwQ0FBNEM7QUFDNUMsdUNBQXFDO0FBQ3JDLHdEQUFzRDtBQUN0RCxxQ0FBcUM7QUFPckM7SUFPRSxrQ0FDVSxLQUFxQixFQUNyQixNQUFjLEVBQ2QsZUFBZ0M7UUFGaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUMxQyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNiLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHVDQUFJLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLCtCQUErQjtRQUUvQixFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQ2xFLCtDQUErQyxDQUFDO2lCQUMvQyxJQUFJLENBQUM7Z0JBQ0osaUNBQWlDO2dCQUNqQyxxQkFBcUI7Z0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFTSx5Q0FBTSxHQUFiLFVBQWMsSUFBWTtRQUExQixpQkFxQkM7UUFwQkMsSUFBSSxHQUFXLENBQUM7UUFDaEIsNENBQTRDO1FBQzVDLHNEQUFzRDtRQUN0RCxpQkFBaUI7UUFDakIsTUFBTTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDVixJQUFJLEVBQUUsR0FBRztTQUNWLENBQUE7UUFFRCxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUztZQUM5Qix5REFBeUQ7WUFDekQsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUM1QyxzQkFBc0I7b0JBQ3RCLGlEQUFpRDtnQkFDbkQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLHlDQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNuQixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFO1NBQ3hELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFuRVUsd0JBQXdCO1FBSnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxvREFBb0Q7U0FDcEUsQ0FBQzt5Q0FTaUIsdUJBQWM7WUFDYixlQUFNO1lBQ0csa0NBQWU7T0FWL0Isd0JBQXdCLENBb0VwQztJQUFELCtCQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndWkvZGlhbG9ncyc7XG5pbXBvcnQgKiBhcyBlbWFpbCBmcm9tIFwibmF0aXZlc2NyaXB0LWVtYWlsXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgeyBEaXJlY3RvclNlcnZpY2UgfSBmcm9tICcuLi9kaXJlY3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1kaXJlY3Rvci1kZXRhaWxzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGlyZWN0b3ItZGV0YWlscy9kaXJlY3Rvci1kZXRhaWxzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3RvckRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIFxuICBjb21wb3NlT3B0aW9uczogZW1haWwuQ29tcG9zZU9wdGlvbnM7XG5cbiAgcHJpdmF0ZSBkaXJlY3Rvck5hbWU6IHN0cmluZztcbiAgcHVibGljIGRpcmVjdG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGRpcmVjdG9yU2VydmljZTogRGlyZWN0b3JTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgdGhpcy5kaXJlY3Rvck5hbWUgPSBwYXJhbXNbJ25hbWUnXTsgIFxuICAgICAgICB0aGlzLmRpcmVjdG9yID0gdGhpcy5kaXJlY3RvclNlcnZpY2UuZ2V0RGlyZWN0b3IodGhpcy5kaXJlY3Rvck5hbWUpO1xuICAgICAgfSk7IFxuICB9XG5cbiAgcHVibGljIGNhbGwocGhudW06IHN0cmluZykge1xuICAgIC8vY29uc29sZS5sb2coXCJSZWFkeSB0byBkaWFsXCIpO1xuXG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgcGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLkNBTExfUEhPTkUsIFxuICAgICAgICBcIkFwcCBOZWVkcyBUaGlzIFBlcm1pc3Npb24gVG8gTWFrZSBQaG9uZSBDYWxsc1wiKVxuICAgICAgICAudGhlbigoKT0+e1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJHb3QgUGVybWlzc2lvbiFcIik7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhwaG51bSk7XG4gICAgICAgICAgVE5TUGhvbmUuZGlhbChTdHJpbmcocGhudW0pLCBmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc3Npb24gRGVuaWVkIVwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBUTlNQaG9uZS5kaWFsKFN0cmluZyhwaG51bSksIGZhbHNlKTtcbiAgICB9XG4gIH0gIFxuICBcbiAgcHVibGljIG1haWxUbyhhZGRyOiBzdHJpbmcpIHtcbiAgICB2YXIgbXNnOiBzdHJpbmc7XG4gICAgLy9kaWFsb2dzLnByb21wdChcIllvdXIgbWVzc2FnZVwiKS50aGVuKHIgPT4ge1xuICAgIC8vICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgdG8gXCIgKyBhZGRyICsgXCI6IFwiICsgci50ZXh0KTtcbiAgICAvLyAgbXNnID0gci50ZXh0O1xuICAgIC8vfSk7IFxuICAgIHRoaXMuY29tcG9zZU9wdGlvbnMgPSB7XG4gICAgICBzdWJqZWN0OiBcIk1lc3NhZ2UgZnJvbSBNb2JpbGUgQXBwXCIsXG4gICAgICB0bzogW2FkZHJdLFxuICAgICAgYm9keTogbXNnXG4gICAgfVxuXG4gICAgZW1haWwuYXZhaWxhYmxlKCkudGhlbihhdmFpbGFibGUgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhgVGhlIGRldmljZSBlbWFpbCBzdGF0dXMgaXMgJHthdmFpbGFibGV9YCk7XG4gICAgICBpZihhdmFpbGFibGUpIHtcbiAgICAgICAgZW1haWwuY29tcG9zZSh0aGlzLmNvbXBvc2VPcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ1RoZSBlbWFpbCB3YXMgcG90ZW50aWFsbHkgc2VudCEnKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgfVxuXG4gIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgJy9ob21lJywgeyBvdXRsZXRzOiB7IGRpcmVjdG9yb3V0bGV0OiBbJ2RpcmVjdG9ycyddIH0gfVxuICAgIF0pXG4gIH1cbn1cbiJdfQ==