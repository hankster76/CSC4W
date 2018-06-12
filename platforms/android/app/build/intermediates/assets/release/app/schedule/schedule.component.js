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
