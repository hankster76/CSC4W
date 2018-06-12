"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var schedule_service_1 = require("../schedule.service");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(router, scheduleService) {
        this.router = router;
        this.scheduleService = scheduleService;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.schedule = this.scheduleService.getSchedule();
    };
    ScheduleComponent.prototype.navigateToDetails = function (name) {
        this.router.navigate([
            '/home', { outlets: { scheduleoutlet: ['schedule', name] } }
        ]);
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'my-schedule',
            templateUrl: './schedule/schedule.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, schedule_service_1.ScheduleService])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6Qyx3REFBc0Q7QUFNdEQ7SUFHRSwyQkFBb0IsTUFBYyxFQUFVLGVBQWdDO1FBQXhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDNUUsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELDZDQUFpQixHQUFqQixVQUFrQixJQUFZO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1NBQzdELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFkVSxpQkFBaUI7UUFKN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxvQ0FBb0M7U0FDcEQsQ0FBQzt5Q0FJNEIsZUFBTSxFQUEyQixrQ0FBZTtPQUhqRSxpQkFBaUIsQ0FlN0I7SUFBRCx3QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2NoZWR1bGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc2NoZWR1bGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQge1xuICBwdWJsaWMgc2NoZWR1bGU6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzY2hlZHVsZVNlcnZpY2U6IFNjaGVkdWxlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zY2hlZHVsZSA9IHRoaXMuc2NoZWR1bGVTZXJ2aWNlLmdldFNjaGVkdWxlKCk7XG4gIH1cblxuICBuYXZpZ2F0ZVRvRGV0YWlscyhuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAnL2hvbWUnLCB7IG91dGxldHM6IHsgc2NoZWR1bGVvdXRsZXQ6IFsnc2NoZWR1bGUnLCBuYW1lXSB9IH1cbiAgICBdKVxuICB9XG59Il19