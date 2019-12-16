import {Routes} from '@angular/router';
 // import {HomeComponent} from './home/home.component';
import {MedicationComponent} from './medication/medication.component';
import { PsychiatricEvaluationComponent } from './psychiatric-evaluation/psychiatric-evaluation.component';
import { PsychSystemsReviewComponent} from './psychiatric-evaluation/psych-systems-review/psych-systems-review.component';



export const appRoutes: Routes = [
   // {path: 'home', component: HomeComponent},
    {path: 'medication', component: MedicationComponent},
    {path: 'psycheval', component: PsychiatricEvaluationComponent},
    {path: 'psychsystemsreview', component: PsychSystemsReviewComponent}
];
