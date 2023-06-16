import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
import { ContribuyentesRestService } from 'src/app/services/contribuyentes-rest.service';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';
import { EntradaProductosRestService } from 'src/app/services/entrada-productos-rest.service';
@Component({
  selector: 'app-edit-almacen',
  templateUrl: './edit-almacen.component.html',
  styleUrls: ['./edit-almacen.component.css']
})
export class EditAlmacenComponent implements OnInit {
  id: any;
  folio: any;
  kilogramos: any;
  importe: any;
  fecha_entrada: any;
  recibioId: any;
  recibioIdName: any;

  clave_producto: any;
  contribuyente: any;
  contribuyenteName: any;

  Newfolio: any;
  Newkilogramos: any;
  Newimporte: any;
  Newfecha_entrada: any;
  NewrecibioId: any;
  Newclave_producto: any;
  Newcontribuyente: any;

  empleadoList: any = [];
  contribuyenteList: any = [];
  productoList: any = [];


  constructor(public ref: MatDialogRef<EditAlmacenComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private almacenService: AlmacenRestService, private productoService: EntradaProductosRestService, private contribuyenteService: ContribuyentesRestService,
    private empleadoService: EmpleadoRestService) {
    this.id = data.id;
    this.folio = data.folio;
    this.kilogramos = data.kilogramos;
    this.importe = data.importe;
    this.fecha_entrada = data.fecha_entrada;
    this.recibioId = data.recibioId;
    this.recibioIdName = data.recibioIdName;

    this.clave_producto = data.clave_producto;
    this.contribuyente = data.contribuyente;
    this.contribuyenteName = data.contribuyenteName;
  }
  ngOnInit(): void {
    this.getContribuyente();
    this.getProducto();
    this.getRecibio();
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
