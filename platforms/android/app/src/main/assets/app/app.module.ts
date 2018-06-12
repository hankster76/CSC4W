import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// import components that represent each page
import { HomeComponent } from './home/home.component';
import { DirectorsComponent } from './directors/directors.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorDetailsComponent } from './sponsor-details/sponsor-details.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectorService } from './director.service';
import { SponsorService } from './sponsor.service';
import { ScheduleService } from './schedule.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SponsorsComponent,
        SponsorDetailsComponent,
        ScheduleComponent,
        ScheduleDetailsComponent,
        WelcomeComponent,
        DirectorsComponent,
        DirectorDetailsComponent    ],
    providers: [
        DirectorService,
        SponsorService,
        ScheduleService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
