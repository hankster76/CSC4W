"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var director_service_1 = require("../director.service");
var DirectorsComponent = /** @class */ (function () {
    function DirectorsComponent(router, directorService) {
        this.router = router;
        this.directorService = directorService;
    }
    DirectorsComponent.prototype.ngOnInit = function () {
        this.directors = this.directorService.getDirectors();
    };
    DirectorsComponent.prototype.navigateToDetails = function (name) {
        this.router.navigate([
            '/home', { outlets: { directoroutlet: ['directors', name] } }
        ]);
    };
    DirectorsComponent = __decorate([
        core_1.Component({
            selector: 'my-directors',
            templateUrl: './directors/directors.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, director_service_1.DirectorService])
    ], DirectorsComponent);
    return DirectorsComponent;
}());
exports.DirectorsComponent = DirectorsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpcmVjdG9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBQ3pDLHdEQUFzRDtBQU10RDtJQUdFLDRCQUFvQixNQUFjLEVBQVUsZUFBZ0M7UUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUM1RSxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsOENBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7U0FDOUQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQWRVLGtCQUFrQjtRQUo5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHNDQUFzQztTQUN0RCxDQUFDO3lDQUk0QixlQUFNLEVBQTJCLGtDQUFlO09BSGpFLGtCQUFrQixDQWU5QjtJQUFELHlCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaXJlY3RvclNlcnZpY2UgfSBmcm9tICcuLi9kaXJlY3Rvci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1kaXJlY3RvcnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kaXJlY3RvcnMvZGlyZWN0b3JzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3RvcnNDb21wb25lbnQge1xuICBwdWJsaWMgZGlyZWN0b3JzOiBBcnJheTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlyZWN0b3JTZXJ2aWNlOiBEaXJlY3RvclNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlyZWN0b3JzID0gdGhpcy5kaXJlY3RvclNlcnZpY2UuZ2V0RGlyZWN0b3JzKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvRGV0YWlscyhuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAnL2hvbWUnLCB7IG91dGxldHM6IHsgZGlyZWN0b3JvdXRsZXQ6IFsnZGlyZWN0b3JzJywgbmFtZV0gfSB9XG4gICAgXSlcbiAgfVxufSJdfQ==