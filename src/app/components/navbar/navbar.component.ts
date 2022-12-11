import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  products!: Products[];
  cartAlertCount!: number;
  isLogged = true;
  isAdmin = true;


  constructor( 
    private cartService: CartService,
    private router: Router,) { }

  ngOnInit(): void {
    this.navBarSticky();
    this.getProductsList();
  }

  getProductsList(){
    this.cartService.products
    .subscribe(data => this.products = data);
  }

  navBarSticky(){
    const headerStick = document.querySelector(".sticky-top");

    window.onscroll = function () {

      if (window.scrollY > 80) {
        headerStick?.classList.add("sticky_element");
      } else {
        headerStick?.classList.remove("sticky_element");
      }
    };
    
  }

  //Icono de alerta del carrito, tomo la longitud del array
  get alertCartLength() { return this.products.length }

}


