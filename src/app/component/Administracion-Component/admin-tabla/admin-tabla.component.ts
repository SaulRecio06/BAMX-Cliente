import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';
import { EditAdministracionComponent } from '../edit-administracion/edit-administracion.component';
import { DeleteAdministracionComponent } from '../delete-administracion/delete-administracion.component';
import { PostAdministracionComponent } from '../post-administracion/post-administracion.component';



@Component({
  selector: 'app-admin-tabla',
  templateUrl: './admin-tabla.component.html',
  styleUrls: ['./admin-tabla.component.css']
})
export class AdminTablaComponent implements OnInit {
  constructor(
    private EmpleadoService: EmpleadoRestService, private dialogRef: MatDialog
  ) { }
  EmpleadoList: any = [];

  id: any;
  created: any;
  nombre: any;
  rolId: any;
  paginaActual = 1;
  itemsPorPagina = 5;

  ngOnInit(): void {
    this.EmpleadoGet();
  }
  openDialog() {
    this.dialogRef.open(PostAdministracionComponent, { width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m' })
  }

  public EmpleadoGet() {
    this.EmpleadoService.getEmpleado().subscribe((_Response: any) => {
      this.EmpleadoList = _Response;
    })
  }

  openEditDialog(element: any) {
    this.id = element['id'];
    this.nombre = element['nombre'];
    this.rolId = element['rolId']['id'];

    this.dialogRef.open(EditAdministracionComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m', data: {
        id: this.id,
        nombre: this.nombre,
        rolId: this.rolId
      }
    })

  }



  openDeleteDialog(element: any) {
    this.id = element['id'];
    this.dialogRef.open(DeleteAdministracionComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms',
      data: {
        id: this.id
      }
    });
  }


  nextPage() {
    // console.log(this.SalidaProductosList.length);
    // console.log(Math.ceil(this.SalidaProductosList.length / this.itemsPorPagina));

    if (!(this.paginaActual == Math.ceil(this.EmpleadoList.length / this.itemsPorPagina))) {
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
