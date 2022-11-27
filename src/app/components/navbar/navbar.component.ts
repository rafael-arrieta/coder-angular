import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navbarClass:string = "navbar__transition__leave";
  navbarContentClass:string = "displayNone" ;

  ngOnInit(): void {
  }

  setNavbarClasses(): void {
      this.navbarClass = "navbar__transition__enter"
      this.navbarContentClass = "display__enter" 
  }

  quitNavbarClasses(): void {
      this.navbarClass = "navbar__transition__leave"
      this.navbarContentClass = "display__leave";
  }
}
