import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SingleRecordValidatorComponent } from './pages/single-record-validator/single-record-validator.component';
import {FormsModule} from "@angular/forms";
import {ClassificationService} from "./services/classification.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    SidebarComponent,
    SingleRecordValidatorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [ClassificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
