import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EntradaProductosRestService } from 'src/app/services/entrada-productos-rest.service';

@Component({
  selector: 'app-delete-entrada-productos',
  templateUrl: './delete-entrada-productos.component.html',
  styleUrls: ['./delete-entrada-productos.component.css']
})
export class DeleteEntradaProductosComponent {
  id: any;

  constructor(public ref: MatDialogRef<DeleteEntradaProductosComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private almacenService: EntradaProductosRestService) {
    this.id = data.id;

  }
  borrar() {
    this.almacenService.deleteEntradaProductos(this.id).subscribe((example: any) => {
      console.log(example);
    });

    window.location.reload();
    console.log(this.id);
  }
  salir() {
    this.ref.close()
  }
}