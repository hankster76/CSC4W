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
