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
  recibioId: any;
  clave_producto: any;
  contribuyente: any;


  Newfolio: any;
  Newkilogramos: any;
  Newimporte: any;
  Newfecha_entrada: any;
  NewrecibioId: any;
  Newclave_producto: any;
  Newcontribuyente: any;

  constructor(public ref: MatDialogRef<EditAlmacenComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private almacenService: AlmacenRestService) {
    this.id = data.id;
    this.folio = data.folio;
    this.kilogramos = data.kilogramos;
    this.importe = data.importe;
    this.fecha_entrada = data.fecha_entrada;
    this.recibioId = data.recibioId;
    this.clave_producto = data.clave_producto;
    this.contribuyente = data.contribuyente;
  }

  prueba() {
    var data: dataAlmacen = {
      folio: this.Newfolio,
      kilogramos: this.Newkilogramos,
      importe: this.Newimporte,
      recibioId: this.NewrecibioId,
      contribuyente: this.Newcontribuyente,
      clave_producto: this.Newclave_producto,
      fecha_entrada: this.Newfecha_entrada
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
  recibioId: Number;
  contribuyente: string;
  clave_producto: Number;
  fecha_entrada: string;

};
