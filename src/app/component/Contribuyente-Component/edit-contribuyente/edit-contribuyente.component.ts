import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContribuyentesRestService } from 'src/app/services/contribuyentes-rest.service';

@Component({
  selector: 'app-edit-contribuyente',
  templateUrl: './edit-contribuyente.component.html',
  styleUrls: ['./edit-contribuyente.component.css']
})
export class EditContribuyenteComponent {
  id: any;
  descripcion: any;
  telefono: any;
  direccion: any;
  rfc: any;

  Newdescripcion: any;
  Newtelefono: any;
  Newdireccion: any;
  Newrfc: any;
  constructor(private ref: MatDialogRef<EditContribuyenteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private contribuyenteService: ContribuyentesRestService) {

    this.id = data.id;
    this.descripcion = data.descripcion;
    this.telefono = data.telefono;
    this.direccion = data.direccion;
    this.rfc = data.rfc;
  }

  prueba() {
    var data: dataContribuyente = {
      descripcion: this.Newdescripcion,
      telefono: this.Newtelefono,
      direccion: this.Newdireccion,
      rfc: this.Newrfc
    }
    var id = this.id;


    this.contribuyenteService.patchContribuyente(id, data);
    window.location.reload();

    this.closePopUp();
  }
  closePopUp() {
    this.ref.close()
  }


}
type dataContribuyente = {
  descripcion: string;
  telefono: number;
  direccion: string;
  rfc: string;
};