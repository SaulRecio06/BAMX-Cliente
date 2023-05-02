import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlmacenRestService } from '../services/almacen-rest.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  constructor(
    private router: Router, private AlmacenService: AlmacenRestService
  ) { }
  AlmacenList: any = [];
  public getJsonValue: any;
  ngOnInit(): void {
    this.AlmacenGet();
  }


  public AlmacenGet() {
    this.AlmacenService.get().subscribe((_Response: any) => {
      this.AlmacenList = _Response;
      console.log(this.AlmacenList);
    })
  }






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
