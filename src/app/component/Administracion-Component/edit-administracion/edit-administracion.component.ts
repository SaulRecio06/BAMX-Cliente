import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';

@Component({
  selector: 'app-edit-administracion',
  templateUrl: './edit-administracion.component.html',
  styleUrls: ['./edit-administracion.component.css']
})
export class EditAdministracionComponent {
  id: any;
  nombre: any;
  rolId: any;

  Newnombre: any;
  NewrolId: any;
  constructor(public ref: MatDialogRef<EditAdministracionComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private AdminService: EmpleadoRestService) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.rolId = data.rolId;
  }
  prueba() {
    var data: dataEmpleado = {
      nombre: this.Newnombre,
      rolId: this.NewrolId
    }
    var id = this.id;



    this.AdminService.patchEmpleado(id, data);
    window.location.reload();

    this.closePopUp();
  }



  closePopUp() {
    this.ref.close()
  }
}
type dataEmpleado = {
  nombre: string;
  rolId: Number;


};