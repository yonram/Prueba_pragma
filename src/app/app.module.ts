import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GlobalService } from './service/global.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
