import {Routes} from '@angular/router';
 // import {HomeComponent} from './home/home.component';
import {MedicationComponent} from './medication/medication.component';
import { PsychiatricEvaluationComponent } from './psychiatric-evaluation/psychiatric-evaluation.component';
import { PsychSystemsReviewComponent} from './psychiatric-evaluation/psych-systems-review/psych-systems-review.component';
import { MedicalHistoryComponent } from './psychiatric-evaluation/medical-history/medical-history.component';
import { AddictionHistoryComponent } from './psychiatric-evaluation/addiction-history/addiction-history.component';
import { ChiefComplaintComponent } from './psychiatric-evaluation/chief-complaint/chief-complaint.component';



export const appRoutes: Routes = [
   // {path: 'home', component: HomeComponent},
    {path: 'medication', component: MedicationComponent},
    {path: 'psycheval', component: PsychiatricEvaluationComponent},
    {path: 'chiefcomplaint', component: ChiefComplaintComponent},
    {path: 'psychsystemsreview', component: PsychSystemsReviewComponent},
    {path: 'medicalhistory', component: MedicalHistoryComponent},
    {path: 'addictionhistory', component: AddictionHistoryComponent},
];
