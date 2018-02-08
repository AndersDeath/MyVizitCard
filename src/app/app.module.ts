import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './constants/route.constant';
import { AutofocusDirective } from './directives/autofocus.directive';

import { AppComponent } from './components/app/app.component';
import { MainComponent } from './components/main/main.component';
import {AccordionListComponent} from './components/accordionList/accordionList.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    MainComponent,
    AutofocusDirective,
    AppComponent,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
