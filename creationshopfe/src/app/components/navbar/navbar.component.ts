import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const headerStick = document.querySelector(".sticky-top");

    window.onscroll = function () {

    if (window.scrollY > 80) {
      headerStick?.classList.add("sticky_element");
    } else {
      headerStick?.classList.remove("sticky_element");
    }
  };
  }


  sticky() {
  
    
  }
  }


