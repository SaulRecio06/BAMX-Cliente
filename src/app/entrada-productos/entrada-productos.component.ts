import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosRestService } from '../services/productos-rest.service';

@Component({
  selector: 'app-entrada-productos',
  templateUrl: './entrada-productos.component.html',
  styleUrls: ['./entrada-productos.component.css']
})
export class EntradaProductosComponent implements OnInit {
  constructor(
    private router: Router, private ProductService: ProductosRestService
  ) { }
  ProductList: any = [];
  public getJsonValue: any;
  ngOnInit(): void {
    this.ProductosGet();
  }


  public ProductosGet() {
    this.ProductService.get().subscribe((_Response: any) => {
      this.ProductList = _Response;
      console.log(this.ProductList);
    })
  }


  ////////////////////////////////////
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
