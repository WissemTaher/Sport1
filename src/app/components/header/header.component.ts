import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  name: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.name = localStorage.getItem('name');

    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        this.isLoggedIn = true;
      }
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('connectedUser');
    localStorage.removeItem('name');
    this.isLoggedIn = false; 
    window.location.href = "";
  }
}