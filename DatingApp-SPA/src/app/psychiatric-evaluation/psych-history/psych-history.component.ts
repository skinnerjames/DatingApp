import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psych-history',
  templateUrl: './psych-history.component.html',
  styleUrls: ['./psych-history.component.css']
})
export class PsychHistoryComponent implements OnInit {

  prevPsychTx = false;
  prevSuicideAtt = false;
  prevSelfHarm = false;
  prevHomicidalIdea = false;
  prevDomViol = false;
  prevLegal = false;

  constructor() { }

  ngOnInit() {
  }

}
