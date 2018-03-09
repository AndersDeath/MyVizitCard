import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './constants/route.constant';
import { AutofocusDirective } from './directives/autofocus.directive';
import { AppComponent } from './components/app/app.component';
import { MainComponent } from './components/main/main.component';

import { MaterialAccordionListComponent } from './components/materialAccordionList/materialAccordionList.component';

import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatInputModule,
  MatRadioModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';

import { PathService } from './services/path.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    MainComponent,
    AutofocusDirective,
    AppComponent,
    MaterialAccordionListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
