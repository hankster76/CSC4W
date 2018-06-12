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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msb0RBQXFFO0FBRXJFLDZDQUE2QztBQUM3Qyx3REFBc0Q7QUFDdEQsdUVBQXFFO0FBQ3JFLDRGQUF5RjtBQUN6RixvRUFBa0U7QUFDbEUseUZBQXNGO0FBQ3RGLG9FQUFrRTtBQUNsRSw0RkFBeUY7QUFDekYsaUVBQStEO0FBQy9ELHVEQUFxRDtBQUNyRCxxREFBbUQ7QUFDbkQsdURBQXFEO0FBOEJyRDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBNUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHNDQUFpQjtnQkFDakIsbURBQXVCO2dCQUN2QixzQ0FBaUI7Z0JBQ2pCLHFEQUF3QjtnQkFDeEIsb0NBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLHFEQUF3QjthQUFLO1lBQ2pDLFNBQVMsRUFBRTtnQkFDUCxrQ0FBZTtnQkFDZixnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vLyBpbXBvcnQgY29tcG9uZW50cyB0aGF0IHJlcHJlc2VudCBlYWNoIHBhZ2VcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdG9yc0NvbXBvbmVudCB9IGZyb20gJy4vZGlyZWN0b3JzL2RpcmVjdG9ycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RvckRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2RpcmVjdG9yLWRldGFpbHMvZGlyZWN0b3ItZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTcG9uc29yc0NvbXBvbmVudCB9IGZyb20gJy4vc3BvbnNvcnMvc3BvbnNvcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3BvbnNvckRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3Nwb25zb3ItZGV0YWlscy9zcG9uc29yLWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2NoZWR1bGVDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNjaGVkdWxlRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGUtZGV0YWlscy9zY2hlZHVsZS1kZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tICcuL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RvclNlcnZpY2UgfSBmcm9tICcuL2RpcmVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTcG9uc29yU2VydmljZSB9IGZyb20gJy4vc3BvbnNvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2NoZWR1bGVTZXJ2aWNlIH0gZnJvbSAnLi9zY2hlZHVsZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBTcG9uc29yc0NvbXBvbmVudCxcclxuICAgICAgICBTcG9uc29yRGV0YWlsc0NvbXBvbmVudCxcclxuICAgICAgICBTY2hlZHVsZUNvbXBvbmVudCxcclxuICAgICAgICBTY2hlZHVsZURldGFpbHNDb21wb25lbnQsXHJcbiAgICAgICAgV2VsY29tZUNvbXBvbmVudCxcclxuICAgICAgICBEaXJlY3RvcnNDb21wb25lbnQsXHJcbiAgICAgICAgRGlyZWN0b3JEZXRhaWxzQ29tcG9uZW50ICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEaXJlY3RvclNlcnZpY2UsXHJcbiAgICAgICAgU3BvbnNvclNlcnZpY2UsXHJcbiAgICAgICAgU2NoZWR1bGVTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19