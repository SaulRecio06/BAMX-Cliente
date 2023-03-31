import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {




  goToAlmacen() {
    console.log("Voy pa almacen");
  }

  goToEntradaP() {
    console.log("Voy pa entrada de productos");
  }

  goToSalidP() {
    console.log("Voy pa salida de productos");
  }

  goToContribuyentes() {
    console.log("Voy pa Contribuyentes");
  }
  goToAdmin() {
    console.log("Voy pa Administracion");
  }

  goToReportes() {
    console.log("Voy pa reportes");
  }
}


