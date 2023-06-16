import { Component, OnInit } from '@angular/core';
import { PostEntradaProductosComponent } from '../post-entrada-productos/post-entrada-productos.component';
import { EditEntradaProductosComponent } from '../edit-entrada-productos/edit-entrada-productos.component';
import { DeleteEntradaProductosComponent } from '../delete-entrada-productos/delete-entrada-productos.component';
import { MatDialog } from '@angular/material/dialog';
import { EntradaProductosRestService } from 'src/app/services/entrada-productos-rest.service';

@Component({
  selector: 'app-entrada-tabla',
  templateUrl: './entrada-tabla.component.html',
  styleUrls: ['./entrada-tabla.component.css']
})
export class EntradaTablaComponent implements OnInit {
  constructor(private EntradaProdService: EntradaProductosRestService, private dialogRef: MatDialog
  ) { }
  EntradaProductosList: any = [];
  id: any;
  descripcion: any;
  codigo_sat: any;
  tipo: any;

  paginaActual = 1;
  itemsPorPagina = 5;
  public getJsonValue: any;
  ngOnInit(): void {
    this.EntradaProductosGet();
  }

  openDialog() {
    this.dialogRef.open(PostEntradaProductosComponent, { width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m' })
  }

  openEditDialog(element: any) {
    this.id = element['id'];
    this.descripcion = element['descripcion'];
    this.codigo_sat = element['codigo_sat'];
    this.tipo = element['tipo'];


    this.dialogRef.open(EditEntradaProductosComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m', data: {
        id: this.id,
        descripcion: this.descripcion,
        codigo_sat: this.codigo_sat,
        tipo: this.tipo


      }
    })

  }



  openDeleteDialog(element: any) {
    this.id = element['id'];

    this.dialogRef.open(DeleteEntradaProductosComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms',
      data: {
        id: this.id
      }
    });
  }

  public EntradaProductosGet() {
    this.EntradaProdService.getEntradaProductos().subscribe((_Response: any) => {
      this.EntradaProductosList = _Response;
    })
  }
  nextPage() {
    // console.log(this.SalidaProductosList.length);
    // console.log(Math.ceil(this.SalidaProductosList.length / this.itemsPorPagina));

    if (!(this.paginaActual == Math.ceil(this.EntradaProductosList.length / this.itemsPorPagina))) {
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