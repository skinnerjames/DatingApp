import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addiction-history',
  templateUrl: './addiction-history.component.html',
  styleUrls: ['./addiction-history.component.css']
})
export class AddictionHistoryComponent implements OnInit {

    priorDrugUse = false;
    drugFrequencyCocaine = false;
    drugFrequencyMeth = false;
    drugFrequencyOpiates = false;
    drugFrequencyMari = false;
    show = false;
  constructor() { }

  ngOnInit() {

  }
}
