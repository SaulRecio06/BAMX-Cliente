import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
@Component({
  selector: 'app-edit-almacen',
  templateUrl: './edit-almacen.component.html',
  styleUrls: ['./edit-almacen.component.css']
})
export class EditAlmacenComponent {
  id: any;
  folio: any;
  kilogramos: any;
  importe: any;
  fecha_entrada: any;
  recibio: any;
  clave_producto: any;
  contribuyente: any;

  Newfolio: any;
  Newkilogramos: any;
  Newimporte: any;
  Newfecha_entrada: any;
  Newrecibio: any;
  Newclave_producto: any;
  Newcontribuyente: any;

  constructor(public ref: MatDialogRef<EditAlmacenComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private almacenService: AlmacenRestService) {
    this.id = data.id;
    this.folio = data.folio;
    this.kilogramos = data.kilogramos;
    this.importe = data.importe;
    this.fecha_entrada = data.fecha_entrada;
    this.recibio = data.recibio;
    this.clave_producto = data.clave_producto;
    this.contribuyente = data.contribuyente;
  }

  prueba() {
    var data: dataAlmacen = {
      folio: this.Newfolio,
      kilogramos: this.Newkilogramos,
      importe: this.Newimporte,
      recibio: this.Newrecibio,
      contribuyente: this.Newcontribuyente,
      clave_producto: this.Newclave_producto,
    }
    var id = this.id;


    this.almacenService.patchAlmacen(id, data);
    window.location.reload();

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }
}
type dataAlmacen = {
  folio: Number;
  kilogramos: Number;
  importe: Number;
  recibio: Number;
  contribuyente: string;
  clave_producto: Number;

};
