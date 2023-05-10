import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
@Component({
  selector: 'app-edit-almacen',
  templateUrl: './edit-almacen.component.html',
  styleUrls: ['./edit-almacen.component.css']
})
export class EditAlmacenComponent implements OnInit {
  id: any;
  almacenCampo: any = [];

  constructor(public ref: MatDialogRef<ModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private almacenService: AlmacenRestService) {
    this.id = data.id;
  }
  ngOnInit(): void {

    console.log(this.id);
    this.almacenService.getAlmacenId(this.id).subscribe((response: any) => {
      console.log(response);
      // this.folio = response.folio;
      // this.kilogramos = response.kilogramos;
      // this.importe = response.importe;
      // this.recibio = response.recibio;
      // this.contribuyente = response.contribuyentes;
      // this.clave_producto = response.clave_producto;
      this.almacenCampo = response;
      console.log(this.almacenCampo);

      for (let index2 in this.almacenCampo) {
        console.log(index2); // prints elements: 0, 1, 2, 3
      }
    });


  }


  folio: Number = 0;
  kilogramos: Number = 0;
  importe: Number = 0;
  recibio: Number = 0;
  contribuyente: string = '';
  clave_producto: Number = 0;


  prueba() {



    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }

  // AgregarAlmacen(data: any) {
  //   console.log(data);
  //   this.almacenService.postAlmacen(data).subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }

}


type dataAlmacen = {
  folio: Number;
  kilogramos: Number;
  importe: Number;
  recibio: Number;
  contribuyente: string;
  clave_producto: Number;

};
