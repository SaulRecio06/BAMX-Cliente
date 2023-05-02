import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContribuyentesRestService } from '../services/contribuyentes-rest.service';

@Component({
  selector: 'app-contribuyentes',
  templateUrl: './contribuyentes.component.html',
  styleUrls: ['./contribuyentes.component.css']
})
export class ContribuyentesComponent implements OnInit {
  constructor(
    private router: Router, private ContribuyentesService: ContribuyentesRestService
  ) { }
  ContribuyentesList: any = [];
  public getJsonValue: any;
  ngOnInit(): void {
    this.ContribuyentesGet();
  }


  public ContribuyentesGet() {
    this.ContribuyentesService.get().subscribe((_Response: any) => {
      this.ContribuyentesList = _Response;
      console.log(this.ContribuyentesList);
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
