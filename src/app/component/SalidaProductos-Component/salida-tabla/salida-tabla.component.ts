import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalidaProductosRestService } from 'src/app/services/salida-productos-rest.service';
import { PostSalidasProductosComponent } from '../post-salidas-productos/post-salidas-productos.component';
import { EditSalidasProductosComponent } from '../edit-salidas-productos/edit-salidas-productos.component';
import { DeleteSalidasProductosComponent } from '../delete-salidas-productos/delete-salidas-productos.component';

@Component({
  selector: 'app-salida-tabla',
  templateUrl: './salida-tabla.component.html',
  styleUrls: ['./salida-tabla.component.css']
})
export class SalidaTablaComponent implements OnInit {
  constructor(private salidaService: SalidaProductosRestService, private dialogRef: MatDialog
  ) { }
  SalidaProductosList: any = [];
  public getJsonValue: any;
  id: any;
  folio_salida: any;
  clave_producto: any;
  titulo: any;
  peso: any;
  destinatario: any;
  observaciones: any;
  concepto: any;

  paginaActual = 1;
  itemsPorPagina = 5;


  ngOnInit(): void {
    this.ContribuyenteGet();
  }




  openDialog() {
    this.dialogRef.open(PostSalidasProductosComponent, { width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m' })
  }

  openEditDialog(element: any) {
    this.id = element['id'];
    this.folio_salida = element['folio_salida'];
    this.clave_producto = element['clave_producto'];
    this.titulo = element['titulo'];
    this.peso = element['peso'];
    this.destinatario = element['destinatario'];
    this.observaciones = element['observaciones'];
    this.concepto = element['concepto'];

    this.dialogRef.open(EditSalidasProductosComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m', data: {
        id: this.id,
        folio_salida: this.folio_salida,
        clave_producto: this.clave_producto,
        titulo: this.titulo,
        peso: this.peso,
        destinatario: this.destinatario,
        observaciones: this.observaciones,
        concepto: this.concepto
      }
    })

  }



  openDeleteDialog(element: any) {
    this.id = element['id'];

    this.dialogRef.open(DeleteSalidasProductosComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms',
      data: {
        id: this.id
      }
    });
  }

  public ContribuyenteGet() {
    this.salidaService.getSalidaProductos().subscribe((_Response: any) => {
      this.SalidaProductosList = _Response;
      console.log(_Response);
    })
  }


  nextPage() {
    // console.log(this.SalidaProductosList.length);
    // console.log(Math.ceil(this.SalidaProductosList.length / this.itemsPorPagina));

    if (!(this.paginaActual == Math.ceil(this.SalidaProductosList.length / this.itemsPorPagina))) {
      this.paginaActual++;
    }

  }

  previousPage() {
    if (this.paginaActual == 1) {

      this.paginaActual = 1;
    }
    else {
      this.paginaActual--;
    }
  }

  filterFields() {
    this.itemsPorPagina;
  }


}
