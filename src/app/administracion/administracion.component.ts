import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoRestService } from '../services/empleado-rest.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
  constructor(
    private router: Router, private EmpleadoService: EmpleadoRestService
  ) { }
  EmpleadoList: any = [];
  public getJsonValue: any;
  ngOnInit(): void {
    this.EmpleadoGet();
  }


  public EmpleadoGet() {
    this.EmpleadoService.getEmpleado().subscribe((_Response: any) => {
      this.EmpleadoList = _Response;
      console.log(this.EmpleadoList);
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
