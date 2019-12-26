import {Routes} from '@angular/router';
 // import {HomeComponent} from './home/home.component';
import {MedicationComponent} from './medication/medication.component';
import { PsychiatricEvaluationComponent } from './psychiatric-evaluation/psychiatric-evaluation.component';
import { PsychSystemsReviewComponent} from './psychiatric-evaluation/psych-systems-review/psych-systems-review.component';
import { MedicalHistoryComponent } from './psychiatric-evaluation/medical-history/medical-history.component';
import { AddictionHistoryComponent } from './psychiatric-evaluation/addiction-history/addiction-history.component';
import { ChiefComplaintComponent } from './psychiatric-evaluation/chief-complaint/chief-complaint.component';
import { PsychHistoryComponent } from './psychiatric-evaluation/psych-history/psych-history.component';
import { FamilyHistoryComponent } from './psychiatric-evaluation/family-history/family-history.component';
import { DevsocialHistoryComponent } from './psychiatric-evaluation/devsocial-history/devsocial-history.component';
import { DiagnosisComponent } from './psychiatric-evaluation/diagnosis/diagnosis.component';
import { MentalStatusComponent } from './psychiatric-evaluation/mental-status/mental-status.component';
import { PhysicalExamComponent } from './psychiatric-evaluation/physical-exam/physical-exam.component';
import { SystemsReviewComponent } from './psychiatric-evaluation/systems-review/systems-review.component';
import { TxPlanComponent } from './psychiatric-evaluation/tx-plan/tx-plan.component';
import { DiagFormulationComponent } from './psychiatric-evaluation/diag-formulation/diag-formulation.component';



export const appRoutes: Routes = [
   // {path: 'home', component: HomeComponent},
    {path: 'addictionhistory', component: AddictionHistoryComponent},
    {path: 'chiefcomplaint', component: ChiefComplaintComponent},
    {path: 'devsocialhistory', component: DevsocialHistoryComponent},
    {path: 'diagformulation', component: DiagFormulationComponent},
    {path: 'diagnosis', component: DiagnosisComponent},
    {path: 'familyhistory', component: FamilyHistoryComponent},
    {path: 'medicalhistory', component: MedicalHistoryComponent},
    {path: 'mentalstatus', component: MentalStatusComponent},
    {path: 'physicalexam', component: PhysicalExamComponent},
    {path: 'psychhistory', component: PsychHistoryComponent},
    {path: 'psychsystemsreview', component: PsychSystemsReviewComponent},
    {path: 'systemsreview', component: SystemsReviewComponent},
    {path: 'txplan', component: TxPlanComponent},
    {path: 'medication', component: MedicationComponent},
    {path: 'psycheval', component: PsychiatricEvaluationComponent},
    {path: 'familyhistory', component: FamilyHistoryComponent},
];
