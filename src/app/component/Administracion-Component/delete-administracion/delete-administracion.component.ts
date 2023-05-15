import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';

@Component({
  selector: 'app-delete-administracion',
  templateUrl: './delete-administracion.component.html',
  styleUrls: ['./delete-administracion.component.css']
})
export class DeleteAdministracionComponent {

  id: any;

  constructor(public ref: MatDialogRef<DeleteAdministracionComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private empleadoService: EmpleadoRestService) {
    this.id = data.id;

  }
  borrar() {
    this.empleadoService.deleteEmpleado(this.id).subscribe((example: any) => {
      console.log(example);
    });

    window.location.reload();
    console.log(this.id);
  }
  salir() {
    this.ref.close()
  }
}
