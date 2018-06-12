"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var welcome_component_1 = require("./welcome/welcome.component");
var directors_component_1 = require("./directors/directors.component");
var director_details_component_1 = require("./director-details/director-details.component");
var sponsors_component_1 = require("./sponsors/sponsors.component");
var sponsor_details_component_1 = require("./sponsor-details/sponsor-details.component");
var schedule_component_1 = require("./schedule/schedule.component");
var schedule_details_component_1 = require("./schedule-details/schedule-details.component");
var routes = [
    { path: '', redirectTo: '/home/(welcomeoutlet:welcome//scheduleoutlet:schedule//directoroutlet:directors//sponsoroutlet:sponsors)', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent, children: [
            { path: 'welcome', component: welcome_component_1.WelcomeComponent, outlet: 'welcomeoutlet' },
            { path: 'directors', component: directors_component_1.DirectorsComponent, outlet: 'directoroutlet' },
            { path: 'directors/:name', component: director_details_component_1.DirectorDetailsComponent, outlet: 'directoroutlet' },
            { path: 'sponsors', component: sponsors_component_1.SponsorsComponent, outlet: 'sponsoroutlet' },
            { path: 'sponsors/:name', component: sponsor_details_component_1.SponsorDetailsComponent, outlet: 'sponsoroutlet' },
            { path: 'schedule', component: schedule_component_1.ScheduleComponent, outlet: 'scheduleoutlet' },
            { path: 'schedule/:name', component: schedule_details_component_1.ScheduleDetailsComponent, outlet: 'scheduleoutlet' }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCx1RUFBcUU7QUFDckUsNEZBQXlGO0FBQ3pGLG9FQUFrRTtBQUNsRSx5RkFBc0Y7QUFDdEYsb0VBQWtFO0FBQ2xFLDRGQUF5RjtBQUV6RixJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLDBHQUEwRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdkosRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFFBQVEsRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUM7WUFDeEUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUM7WUFDN0UsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLHFEQUF3QixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQztZQUN6RixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUM7WUFDMUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUM7WUFDdEYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUM7WUFDM0UsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHFEQUF3QixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQztTQUN6RixFQUFDO0NBQ0gsQ0FBQztBQU1GO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tICcuL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0b3JzQ29tcG9uZW50IH0gZnJvbSAnLi9kaXJlY3RvcnMvZGlyZWN0b3JzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RvckRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2RpcmVjdG9yLWRldGFpbHMvZGlyZWN0b3ItZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3BvbnNvcnNDb21wb25lbnQgfSBmcm9tICcuL3Nwb25zb3JzL3Nwb25zb3JzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcG9uc29yRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vc3BvbnNvci1kZXRhaWxzL3Nwb25zb3ItZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY2hlZHVsZURldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlLWRldGFpbHMvc2NoZWR1bGUtZGV0YWlscy5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9ob21lLyh3ZWxjb21lb3V0bGV0OndlbGNvbWUvL3NjaGVkdWxlb3V0bGV0OnNjaGVkdWxlLy9kaXJlY3Rvcm91dGxldDpkaXJlY3RvcnMvL3Nwb25zb3JvdXRsZXQ6c3BvbnNvcnMpJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICB7IHBhdGg6ICd3ZWxjb21lJywgY29tcG9uZW50OiBXZWxjb21lQ29tcG9uZW50LCBvdXRsZXQ6ICd3ZWxjb21lb3V0bGV0J30sXG4gICAgeyBwYXRoOiAnZGlyZWN0b3JzJywgY29tcG9uZW50OiBEaXJlY3RvcnNDb21wb25lbnQsIG91dGxldDogJ2RpcmVjdG9yb3V0bGV0J30sIFxuICAgIHsgcGF0aDogJ2RpcmVjdG9ycy86bmFtZScsIGNvbXBvbmVudDogRGlyZWN0b3JEZXRhaWxzQ29tcG9uZW50LCBvdXRsZXQ6ICdkaXJlY3Rvcm91dGxldCd9LFxuICAgIHsgcGF0aDogJ3Nwb25zb3JzJywgY29tcG9uZW50OiBTcG9uc29yc0NvbXBvbmVudCwgb3V0bGV0OiAnc3BvbnNvcm91dGxldCd9LFxuICAgIHsgcGF0aDogJ3Nwb25zb3JzLzpuYW1lJywgY29tcG9uZW50OiBTcG9uc29yRGV0YWlsc0NvbXBvbmVudCwgb3V0bGV0OiAnc3BvbnNvcm91dGxldCd9LFxuICAgIHsgcGF0aDogJ3NjaGVkdWxlJywgY29tcG9uZW50OiBTY2hlZHVsZUNvbXBvbmVudCwgb3V0bGV0OiAnc2NoZWR1bGVvdXRsZXQnfSxcbiAgICB7IHBhdGg6ICdzY2hlZHVsZS86bmFtZScsIGNvbXBvbmVudDogU2NoZWR1bGVEZXRhaWxzQ29tcG9uZW50LCBvdXRsZXQ6ICdzY2hlZHVsZW91dGxldCd9XG4gIF19IFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9Il19