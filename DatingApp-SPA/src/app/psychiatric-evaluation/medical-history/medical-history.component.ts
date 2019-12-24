import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  psychHistIsClicked = false;
  prevLethalityIsClicked = true;
  prevSelfHarmIsClicked = true;
  otherHarmIsClicked = true;
  prevDomViolIsClicked = true;
  prevLegalIsClicked = true;

  constructor() { }

  ngOnInit() {
  }

}
