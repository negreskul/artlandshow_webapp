import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './tabs/main/main.component';
import { AboutUsComponent } from './tabs/about-us/about-us.component';
import { RepertoireComponent } from './tabs/repertoire/repertoire.component';
import { ProjectsComponent } from './tabs/projects/projects.component';
import { ServicesComponent } from './tabs/services/services.component';
import { TeamComponent } from './tabs/team/team.component';
import { ContactsComponent } from './tabs/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutUsComponent,
    RepertoireComponent,
    ProjectsComponent,
    ServicesComponent,
    TeamComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
