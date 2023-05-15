import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
import { EditAlmacenComponent } from '../edit-almacen/edit-almacen.component';
import { DeleteAlmacenComponent } from '../delete-almacen/delete-almacen.component';
import { PostAlmacenComponent } from '../post-almacen/post-almacen.component';

@Component({
  selector: 'app-almacen-tabla',
  templateUrl: './almacen-tabla.component.html',
  styleUrls: ['./almacen-tabla.component.css']
})
export class AlmacenTablaComponent implements OnInit {
  constructor(private AlmacenService: AlmacenRestService, private dialogRef: MatDialog
  ) { }
  AlmacenList: any = [];
  id: any;
  folio: any;
  kilogramos: any;
  importe: any;
  fecha_entrada: any;
  recibio: any;
  clave_producto: any;
  contribuyente: any;

  public getJsonValue: any;
  ngOnInit(): void {
    this.AlmacenGet();
  }

  openDialog() {
    this.dialogRef.open(PostAlmacenComponent, { width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m' })
  }

  openEditDialog(element: any) {
    this.id = element['id'];
    this.folio = element['folio'];
    this.kilogramos = element['kilogramos'];
    this.importe = element['importe'];
    this.fecha_entrada = element['fecha_entrada'];
    this.recibio = element['recibio']['id'];
    this.clave_producto = element['clave_producto']['id'];
    this.contribuyente = element['contribuyente']['id'];

    this.dialogRef.open(EditAlmacenComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m', data: {
        id: this.id,
        folio: this.folio,
        kilogramos: this.kilogramos,
        importe: this.importe,
        fecha_entrada: this.fecha_entrada,
        recibio: this.recibio,
        clave_producto: this.clave_producto,
        contribuyente: this.contribuyente
      }
    })

  }



  openDeleteDialog(element: any) {
    this.id = element['id'];

    this.dialogRef.open(DeleteAlmacenComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms',
      data: {
        id: this.id
      }
    });
  }

  public AlmacenGet() {
    this.AlmacenService.getAlmacen().subscribe((_Response: any) => {
      this.AlmacenList = _Response;
    })
  }




}
