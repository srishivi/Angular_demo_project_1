import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  standalone: false,
})

export class AdminComponent  {

  constructor(private router : Router) {

  }
  logout() {
    this.router.navigateByUrl('/');
  }
}
