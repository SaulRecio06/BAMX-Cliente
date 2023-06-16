import { Component, Inject, Optional } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalidaProductosRestService } from 'src/app/services/salida-productos-rest.service';
@Component({
  selector: 'app-delete-salidas-productos',
  templateUrl: './delete-salidas-productos.component.html',
  styleUrls: ['./delete-salidas-productos.component.css']
})
export class DeleteSalidasProductosComponent {
  id: any;

  constructor(public ref: MatDialogRef<DeleteSalidasProductosComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private salidaProductosService: SalidaProductosRestService) {
    this.id = data.id;

  }
  borrar() {
    this.salidaProductosService.deleteSalidaProducto(this.id).subscribe((example: any) => {
      console.log(example);
    });

    window.location.reload();
    console.log(this.id);
  }
  salir() {
    this.ref.close()
  }
}
