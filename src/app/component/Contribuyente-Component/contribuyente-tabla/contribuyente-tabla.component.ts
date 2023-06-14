import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContribuyentesRestService } from 'src/app/services/contribuyentes-rest.service';
import { PostContribuyenteComponent } from '../post-contribuyente/post-contribuyente.component';
import { EditContribuyenteComponent } from '../edit-contribuyente/edit-contribuyente.component';
import { DeleteContribuyenteComponent } from '../delete-contribuyente/delete-contribuyente.component';

@Component({
  selector: 'app-contribuyente-tabla',
  templateUrl: './contribuyente-tabla.component.html',
  styleUrls: ['./contribuyente-tabla.component.css']
})
export class ContribuyenteTablaComponent implements OnInit {
  constructor(private contribuyenteService: ContribuyentesRestService, private dialogRef: MatDialog
  ) { }
  ContribuyenteList: any = [];
  id: any;
  descripcion: any;
  direccion: any;

  telefono: any;
  rfc: any;
  paginaActual = 1;
  itemsPorPagina = 5;

  public getJsonValue: any;
  ngOnInit(): void {
    this.ContribuyenteGet();
  }

  openDialog() {
    this.dialogRef.open(PostContribuyenteComponent, { width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m' })
  }

  openEditDialog(element: any) {
    this.id = element['id'];
    this.descripcion = element['descripcion'];
    this.direccion = element['direccion'];

    this.telefono = element['telefono'];
    this.rfc = element['rfc'];

    this.dialogRef.open(EditContribuyenteComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m', data: {
        id: this.id,
        descripcion: this.descripcion,
        telefono: this.telefono,
        direccion: this.direccion,

        rfc: this.rfc
      }
    })

  }



  openDeleteDialog(element: any) {
    this.id = element['id'];

    this.dialogRef.open(DeleteContribuyenteComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms',
      data: {
        id: this.id
      }
    });
  }

  public ContribuyenteGet() {
    this.contribuyenteService.getContribuyentes().subscribe((_Response: any) => {
      this.ContribuyenteList = _Response;
    })
  }


  nextPage() {
    // console.log(this.SalidaProductosList.length);
    // console.log(Math.ceil(this.SalidaProductosList.length / this.itemsPorPagina));

    if (!(this.paginaActual == Math.ceil(this.ContribuyenteList.length / this.itemsPorPagina))) {
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
