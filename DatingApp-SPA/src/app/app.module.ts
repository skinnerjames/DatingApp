import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NavComponent} from './nav/nav.component';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { PsychiatricEvaluationComponent } from './psychiatric-evaluation/psychiatric-evaluation.component';
import { ChiefComplaintComponent } from './psychiatric-evaluation/chief-complaint/chief-complaint.component';
import { PsychSystemsReviewComponent} from './psychiatric-evaluation/psych-systems-review/psych-systems-review.component';
import { MedicalHistoryComponent} from './psychiatric-evaluation/medical-history/medical-history.component';
import { AddictionHistoryComponent} from './psychiatric-evaluation/addiction-history/addiction-history.component';
import { MentalStatusComponent} from './psychiatric-evaluation/mental-status/mental-status.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MedicationComponent } from './medication/medication.component';
import { from } from 'rxjs';
import { PsychHistoryComponent } from './psychiatric-evaluation/psych-history/psych-history.component';
import { FamilyHistoryComponent } from './psychiatric-evaluation/family-history/family-history.component';
import { DevsocialHistoryComponent } from './psychiatric-evaluation/devsocial-history/devsocial-history.component';
import { DiagFormulationComponent } from './psychiatric-evaluation/diag-formulation/diag-formulation.component';
import { DiagnosisComponent } from './psychiatric-evaluation/diagnosis/diagnosis.component';
import { PhysicalExamComponent } from './psychiatric-evaluation/physical-exam/physical-exam.component';
import { SystemsReviewComponent } from './psychiatric-evaluation/systems-review/systems-review.component';
import { TxPlanComponent } from './psychiatric-evaluation/tx-plan/tx-plan.component';



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ValueComponent,
      PsychiatricEvaluationComponent,
      AddictionHistoryComponent,
      ChiefComplaintComponent,
      DevsocialHistoryComponent,
      DiagFormulationComponent,
      DiagnosisComponent,
      FamilyHistoryComponent,
      MedicalHistoryComponent,
      MentalStatusComponent,
      PhysicalExamComponent,
      PsychHistoryComponent,
      SystemsReviewComponent,
      TxPlanComponent,
      MedicationComponent,
      PsychSystemsReviewComponent


   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      NgbModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
