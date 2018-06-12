"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var forms_1 = require("nativescript-angular/forms");
// import components that represent each page
var home_component_1 = require("./home/home.component");
var directors_component_1 = require("./directors/directors.component");
var director_details_component_1 = require("./director-details/director-details.component");
var sponsors_component_1 = require("./sponsors/sponsors.component");
var sponsor_details_component_1 = require("./sponsor-details/sponsor-details.component");
var schedule_component_1 = require("./schedule/schedule.component");
var schedule_details_component_1 = require("./schedule-details/schedule-details.component");
var welcome_component_1 = require("./welcome/welcome.component");
var director_service_1 = require("./director.service");
var sponsor_service_1 = require("./sponsor.service");
var schedule_service_1 = require("./schedule.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                sponsors_component_1.SponsorsComponent,
                sponsor_details_component_1.SponsorDetailsComponent,
                schedule_component_1.ScheduleComponent,
                schedule_details_component_1.ScheduleDetailsComponent,
                welcome_component_1.WelcomeComponent,
                directors_component_1.DirectorsComponent,
                director_details_component_1.DirectorDetailsComponent
            ],
            providers: [
                director_service_1.DirectorService,
                sponsor_service_1.SponsorService,
                schedule_service_1.ScheduleService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
