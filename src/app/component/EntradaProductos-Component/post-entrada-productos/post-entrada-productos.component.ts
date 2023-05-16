import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EntradaProductosRestService } from 'src/app/services/entrada-productos-rest.service';

@Component({
  selector: 'app-post-entrada-productos',
  templateUrl: './post-entrada-productos.component.html',
  styleUrls: ['./post-entrada-productos.component.css']
})
export class PostEntradaProductosComponent {

  constructor(private ref: MatDialogRef<PostEntradaProductosComponent>,
    private entradaProductosService: EntradaProductosRestService) {

  }
  descripcion: any;
  codigo_sat: any;

  prueba() {
    console.log("Añadiste algo!!");


    var data: dataEntradaProductos = {
      descripcion: this.descripcion,
      codigo_sat: this.codigo_sat
    };
    // console.log(JSON.stringify(data));
    // console.log(data);

    this.AgregarEntradaProducto(data);
    window.location.reload();

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }

  AgregarEntradaProducto(data: any) {
    console.log(data);
    this.entradaProductosService.postEntradaProductos(data).subscribe((res: any) => {
      console.log(res);
    });
  }

}
type dataEntradaProductos = {
  descripcion: string;
  codigo_sat: number;

};
