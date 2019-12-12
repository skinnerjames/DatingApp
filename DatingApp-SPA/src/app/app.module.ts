import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import {NavComponent} from './nav/nav.component';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { PsychiatricEvaluationComponent } from './psychiatric-evaluation/psychiatric-evaluation.component';
import { ChiefComplaintComponent } from './psychiatric-evaluation/chief-complaint/chief-complaint.component';
import { MedicalHistoryComponent} from './psychiatric-evaluation/medical-history/medical-history.component';
import { MentalStatusComponent} from './psychiatric-evaluation/mental-status/mental-status.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MedicationComponent } from './medication/medication.component';
@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ValueComponent,
      PsychiatricEvaluationComponent,
      ChiefComplaintComponent,
      MedicalHistoryComponent,
      MentalStatusComponent,
      MedicationComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
