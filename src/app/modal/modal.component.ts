import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlmacenRestService } from '../services/almacen-rest.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(private ref: MatDialogRef<ModalComponent>, private almacenService: AlmacenRestService) {

  }
  folio: Number = 0;
  kilogramos: Number = 0;
  importe: Number = 0;
  recibio: Number = 0;
  contribuyente: string = '';
  clave_producto: Number = 0;



  prueba() {
    console.log("Añadiste algo!!");


    var data: dataAlmacen = {
      folio: this.folio,
      kilogramos: this.kilogramos,
      importe: this.importe,
      recibio: this.recibio,
      contribuyente: this.contribuyente,
      clave_producto: this.clave_producto,
    };
    // console.log(JSON.stringify(data));
    // console.log(data);

    this.AgregarAlmacen(data);

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }

  AgregarAlmacen(data: any) {
    console.log(data);
    this.almacenService.postAlmacen(data).subscribe((res: any) => {
      console.log(res);
    });
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
