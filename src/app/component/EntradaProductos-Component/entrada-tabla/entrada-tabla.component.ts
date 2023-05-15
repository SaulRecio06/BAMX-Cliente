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


    this.dialogRef.open(EditEntradaProductosComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m', data: {
        id: this.id,
        descripcion: this.descripcion,
        codigo_sat: this.codigo_sat

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




}