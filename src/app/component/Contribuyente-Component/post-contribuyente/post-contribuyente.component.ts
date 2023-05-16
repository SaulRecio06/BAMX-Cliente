import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContribuyentesRestService } from 'src/app/services/contribuyentes-rest.service';

@Component({
  selector: 'app-post-contribuyente',
  templateUrl: './post-contribuyente.component.html',
  styleUrls: ['./post-contribuyente.component.css']
})
export class PostContribuyenteComponent {


  constructor(private ref: MatDialogRef<PostContribuyenteComponent>, private contribuyenteService: ContribuyentesRestService) {

  }
  descripcion: any;
  telefono: any;
  direccion: any;
  rfc: any;



  prueba() {
    var data: dataContribuyente = {
      descripcion: this.descripcion,
      telefono: this.telefono,
      direccion: this.direccion,
      rfc: this.rfc

    };
    this.AgregarContribuyente(data);
    window.location.reload();

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }

  AgregarContribuyente(data: any) {
    console.log(data);
    this.contribuyenteService.postContribuyente(data).subscribe((res: any) => {
      console.log(res);
    });
  }

}


type dataContribuyente = {
  descripcion: string;
  telefono: number;
  direccion: string;
  rfc: string;
};