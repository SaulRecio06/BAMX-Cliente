import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalidaProductosRestService } from 'src/app/services/salida-productos-rest.service';

@Component({
  selector: 'app-edit-salidas-productos',
  templateUrl: './edit-salidas-productos.component.html',
  styleUrls: ['./edit-salidas-productos.component.css']
})
export class EditSalidasProductosComponent {
  id: any;
  folio_salida: any;
  clave_producto: any;
  titulo: any;
  peso: any;
  destinatario: any;
  observaciones: any;
  concepto: any;


  Newfolio_salida: any;
  Newclave_producto: any;
  Newtitulo: any;
  Newpeso: any;
  Newdestinatario: any;
  Newobservaciones: any;
  Newconcepto: any;


  constructor(public ref: MatDialogRef<EditSalidasProductosComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private SalidaProductosService: SalidaProductosRestService) {
    this.id = data.id;
    this.folio_salida = data.folio_salida;
    this.clave_producto = data.clave_producto;
    this.titulo = data.titulo;
    this.peso = data.peso;
    this.destinatario = data.destinatario;
    this.observaciones = data.observaciones;
    this.concepto = data.concepto;

  }

  prueba() {
    var data: dataSalidaProductos = {
      folio_salida: this.Newfolio_salida,
      clave_producto: this.Newclave_producto,
      titulo: this.Newtitulo,
      peso: this.Newpeso,
      destinatario: this.Newdestinatario,
      observaciones: this.Newobservaciones,
      concepto: this.Newconcepto
    };
    var id = this.id;

    console.log(data);
    this.SalidaProductosService.patchSalidaProducto(id, data);
    window.location.reload();

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }
}
type dataSalidaProductos = {
  folio_salida: string;
  clave_producto: string;
  titulo: string;
  peso: number;
  destinatario: string;
  observaciones: string;
  concepto: string;
};