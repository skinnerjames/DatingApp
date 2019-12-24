import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    model: any = {};
    collapsed = true;
    psychEvalSections1: any = ['Chief complaint', 'Systems review', 'Health history', 'Substance use history'];
    psychEvalSections: any = [
      {Name: 'Chief complaint' , value: './psychiatric-evaluation/psych-systems-review/psych-systems-review.component'},
      {Name: 'Systems review' , value: '/Menu2'},
      ];


  constructor(private authService: AuthService, private router: Router, public fb: FormBuilder) { }

  psychEvalForm = this.fb.group({
    psychEvalSection: ['']
  });

  ngOnInit() {

  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    }, error => {
      console.log('failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
  changePsychEval(e) {
    this.psychEvalSections.setValue(e.target.value, {
      onlySelf: true
    });
  }
  get psychEvalSection() {
    return this.psychEvalForm.get('psychEval');
  }
}
