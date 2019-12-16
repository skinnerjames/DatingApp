import { Component, OnInit, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chief-complaint',
  templateUrl: './chief-complaint.component.html',
  styleUrls: ['./chief-complaint.component.css']
})
export class ChiefComplaintComponent implements OnInit {


  // prevTxs = ['yes', 'no'];


  constructor() {const isClicked = new FormControl(); }

  ngOnInit() {
  }

  }



