import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
import { ContribuyentesRestService } from 'src/app/services/contribuyentes-rest.service';
@Component({
  selector: 'app-post-almacen',
  templateUrl: './post-almacen.component.html',
  styleUrls: ['./post-almacen.component.css']
})
export class PostAlmacenComponent {
  constructor(private ref: MatDialogRef<PostAlmacenComponent>,
    private almacenService: AlmacenRestService, private contribuyenteService: ContribuyentesRestService) {

  }

  ngOnInit(): void {
    this.ContribuyenteGet();
  }

  folio: Number = 0;
  kilogramos: Number = 0;
  importe: Number = 0;
  recibio: Number = 0;
  contribuyente: string = '';
  clave_producto: Number = 0;

  contribuyentes: any;


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
    window.location.reload();

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

  public ContribuyenteGet() {
    this.contribuyenteService.getContribuyentes().subscribe((_Response: any) => {
  
      this.contribuyentes = _Response;
      console.log(this.contribuyentes);
    })
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

