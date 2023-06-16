import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
import { SalidaProductosRestService } from 'src/app/services/salida-productos-rest.service';

@Component({
  selector: 'app-post-salidas-productos',
  templateUrl: './post-salidas-productos.component.html',
  styleUrls: ['./post-salidas-productos.component.css']
})
export class PostSalidasProductosComponent implements OnInit {

  constructor(private ref: MatDialogRef<PostSalidasProductosComponent>,
    private salidaProductosService: SalidaProductosRestService, private almacenService: AlmacenRestService) {

  }
  ngOnInit(): void {
    this.getAlmacen();
  }

  folio_salida: any;
  clave_producto: any;
  titulo: any;
  peso: any;
  destinatario: any;
  observaciones: any;
  concepto: any;
  almacenList: any = [];

  prueba() {
    console.log("Añadiste algo!!");


    var data: dataSalidaProductos = {
      folio_salida: this.folio_salida,
      clave_producto: this.clave_producto,
      titulo: this.titulo,
      peso: this.peso,
      destinatario: this.destinatario,
      observaciones: this.observaciones,
      concepto: this.concepto
    };
    // console.log(JSON.stringify(data));
    // console.log(data);

    this.AgregarSalidaProducto(data);
    window.location.reload();

    this.closePopUp();
  }

  closePopUp() {
    this.ref.close()
  }

  AgregarSalidaProducto(data: any) {
    console.log(data);
    this.salidaProductosService.postSalidaProducto(data).subscribe((res: any) => {
      console.log(res);
    });
  }

  getAlmacen() {
    this.almacenService.getAlmacen().subscribe((res: any) => {
      console.log(res);
      this.almacenList = res;
    })


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