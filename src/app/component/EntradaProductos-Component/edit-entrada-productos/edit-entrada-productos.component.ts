import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EntradaProductosRestService } from 'src/app/services/entrada-productos-rest.service';

@Component({
  selector: 'app-edit-entrada-productos',
  templateUrl: './edit-entrada-productos.component.html',
  styleUrls: ['./edit-entrada-productos.component.css']
})
export class EditEntradaProductosComponent {
  id: any;
  descripcion: any;
  codigo_sat: any;

  newDescripcion: any;
  newCodigo_sat: any;

  constructor(public ref: MatDialogRef<EditEntradaProductosComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private entradaProductosService: EntradaProductosRestService) {
    this.id = data.id;
    this.descripcion = data.descripcion;
    this.codigo_sat = data.codigo_sat;
  }

  prueba() {
    var data: dataEntradaProductos = {
      descripcion: this.newDescripcion,
      codigo_sat: this.newCodigo_sat,

    }
    var id = this.id;

    console.log(data);
    this.entradaProductosService.patchEntradaProductos(id, data);
    window.location.reload();

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }
}
type dataEntradaProductos = {
  descripcion: string;
  codigo_sat: number;

};
