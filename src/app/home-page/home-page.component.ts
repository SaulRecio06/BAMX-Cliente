import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(
    private router: Router,
  ) { }
  goToHome() {
    console.log("Voy pa home");
    this.router.navigate(['homePage']);
  }
  goToAlmacen() {
    console.log("Voy pa almacen");
    this.router.navigate(['almacen']);
  }

  goToEntrada() {
    console.log("Voy pa entrada");
    this.router.navigate(['entrada']);

  }

  goToSalida() {
    console.log("Voy pa salida");
    this.router.navigate(['salida']);

  }
  goToContri() {
    console.log("Voy pa contribuyentes");
    this.router.navigate(['contribuyentes']);

  }
  goToAdmin() {
    console.log("Voy pa admin");
    this.router.navigate(['admin']);

  }

  goToReportes() {
    console.log("Voy pa reportes");
    this.router.navigate(['reportes']);

  }

  goToLogin() {
    console.log("Voy pa login");
    this.router.navigate(['login']);
  }
}


