import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { CartService } from 'src/app/services/cart.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  products!: Products[];
  cartAlertCount!: number;
  isLogged!: boolean;
  roles!: string[];
  isAdmin!: boolean;

  constructor( 
    private cartService: CartService,
    private router: Router,
    private tokenService: TokenService,
    
    ) { 

      this.IfIsAdmin();
      
    }


    
    ngOnInit(): void {
      this.getToken();

      this.navBarSticky();
      this.getProductsList();
    }

    IfIsAdmin(){
      //si es adm
      (this.roles = this.tokenService.getAuthorities());
      this.roles.forEach((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      });
    }
    
    getToken(){
            //si esta logeado
            if (this.tokenService.getToken()) {
              this.isLogged = true;
            } else {
              this.isLogged = false;
            };
    }

    getProductsList(){
      this.cartService.products
      .subscribe(data => this.products = data);
    }

    onLogOut(){
      this.tokenService.logOut();
      window.location.reload();
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


