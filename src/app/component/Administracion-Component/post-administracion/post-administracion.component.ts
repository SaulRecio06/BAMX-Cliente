import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';

@Component({
  selector: 'app-post-administracion',
  templateUrl: './post-administracion.component.html',
  styleUrls: ['./post-administracion.component.css']
})
export class PostAdministracionComponent implements OnInit {
  constructor(private ref: MatDialogRef<PostAdministracionComponent>, private empleadoService: EmpleadoRestService) {

  }
  ngOnInit(): void {
    this.RolGet();
  }

  nombre: any;
  rolId: any;


  RolList: any = [];



  public RolGet() {
    this.empleadoService.getRoles().subscribe((_Response: any) => {
      this.RolList = _Response;
      console.log(this.RolList);
    })
  }

  prueba() {
    console.log("Añadiste algo!!");


    var data: dataAlmacen = {
      nombre: this.nombre,
      rolId: this.rolId

    };
    // console.log(data);
    this.AgregarAlmacen(data);
    window.location.reload();

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }

  AgregarAlmacen(data: any) {
    console.log(data);
    this.empleadoService.postEmpleado(data).subscribe((res: any) => {
      console.log(res);
    });
  }

}


type dataAlmacen = {
  nombre: string;
  rolId: number;

};
