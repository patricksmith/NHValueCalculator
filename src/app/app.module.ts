import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent, AppAlgoFormComponent } from './app.component';
// import { OnChangesComponent, OnChangesParentComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    // OnChangesComponent,
    // OnChangesParentComponent
    AppComponent,
    AppAlgoFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxChartsModule
  ],
  providers: [],
  // bootstrap: [OnChangesParentComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
