import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';

@Component({
  selector: 'app-post-administracion',
  templateUrl: './post-administracion.component.html',
  styleUrls: ['./post-administracion.component.css']
})
export class PostAdministracionComponent {
  constructor(private ref: MatDialogRef<PostAdministracionComponent>, private empleadoService: EmpleadoRestService) {

  }

  nombre: any;
  rolId: any;



  prueba() {
    console.log("Añadiste algo!!");


    var data: dataAlmacen = {
      nombre: this.nombre,
      rolId: this.rolId

    };
    // console.log(JSON.stringify(data));
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
