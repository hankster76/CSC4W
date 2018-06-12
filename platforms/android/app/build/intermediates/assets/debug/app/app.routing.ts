import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectorsComponent } from './directors/directors.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorDetailsComponent } from './sponsor-details/sponsor-details.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/(welcomeoutlet:welcome//scheduleoutlet:schedule//directoroutlet:directors//sponsoroutlet:sponsors)', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'welcome', component: WelcomeComponent, outlet: 'welcomeoutlet'},
    { path: 'directors', component: DirectorsComponent, outlet: 'directoroutlet'}, 
    { path: 'directors/:name', component: DirectorDetailsComponent, outlet: 'directoroutlet'},
    { path: 'sponsors', component: SponsorsComponent, outlet: 'sponsoroutlet'},
    { path: 'sponsors/:name', component: SponsorDetailsComponent, outlet: 'sponsoroutlet'},
    { path: 'schedule', component: ScheduleComponent, outlet: 'scheduleoutlet'},
    { path: 'schedule/:name', component: ScheduleDetailsComponent, outlet: 'scheduleoutlet'}
  ]} 
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}