import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
import { ContribuyentesRestService } from 'src/app/services/contribuyentes-rest.service';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';
import { EntradaProductosRestService } from 'src/app/services/entrada-productos-rest.service';
@Component({
  selector: 'app-post-almacen',
  templateUrl: './post-almacen.component.html',
  styleUrls: ['./post-almacen.component.css']
})
export class PostAlmacenComponent implements OnInit {
  constructor(private ref: MatDialogRef<PostAlmacenComponent>,
    private almacenService: AlmacenRestService, private productoService: EntradaProductosRestService, private contribuyenteService: ContribuyentesRestService,
    private empleadoService: EmpleadoRestService) {

  }
  ngOnInit(): void {
    this.getContribuyente();
    this.getProducto();
    this.getRecibio();
  }
  folio: Number = 0;
  kilogramos: Number = 0;
  importe: Number = 0;
  recibioId: Number = 0;
  contribuyente: string = '';
  clave_producto: Number = 0;
  fecha_entrada: string = "";

  empleadoList: any = [];
  contribuyenteList: any = [];
  productoList: any = [];



  prueba() {
    console.log("Añadiste algo!!");


    var data: dataAlmacen = {
      folio: this.folio,
      kilogramos: this.kilogramos,
      importe: this.importe,
      recibioId: this.recibioId,
      contribuyente: this.contribuyente,
      clave_producto: this.clave_producto,
      fecha_entrada: this.fecha_entrada
    };
    // console.log(JSON.stringify(data));
    // console.log(data);

    this.AgregarAlmacen(data);
    // window.location.reload();

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


  getRecibio() {
    this.empleadoService.getEmpleado().subscribe((res: any) => {
      this.empleadoList = res;
      console.log(res);
    })
  }
  getContribuyente() {
    this.contribuyenteService.getContribuyentes().subscribe((res: any) => {
      this.contribuyenteList = res;
      console.log(res);
    })
  }

  getProducto() {
    this.productoService.getEntradaProductos().subscribe((res: any) => {
      this.productoList = res;
      console.log(res);
    })
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
