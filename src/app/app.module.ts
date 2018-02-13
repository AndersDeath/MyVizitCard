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
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    MainComponent,
    AutofocusDirective,
    AppComponent,
    MaterialAccordionListComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
