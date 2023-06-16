import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadoRestService } from 'src/app/services/empleado-rest.service';

@Component({
  selector: 'app-edit-administracion',
  templateUrl: './edit-administracion.component.html',
  styleUrls: ['./edit-administracion.component.css']
})
export class EditAdministracionComponent implements OnInit {
  id: any;
  nombre: any;
  rolId: any;
  rolIdName: any;

  RolList: any = [];


  Newnombre: any;
  NewrolId: any;
  constructor(public ref: MatDialogRef<EditAdministracionComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private AdminService: EmpleadoRestService, private empleadoService: EmpleadoRestService) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.rolId = data.rolId;
    this.rolIdName = data.rolIdName;
  }
  ngOnInit(): void {
    this.RolGet();
    console.log(this.rolIdName);
  }


  public RolGet() {
    this.empleadoService.getRoles().subscribe((_Response: any) => {
      this.RolList = _Response;
      console.log(this.RolList);
    })
  }
  prueba() {
    var data: dataEmpleado = {
      nombre: this.Newnombre,
      rolId: this.NewrolId
    }
    var id = this.id;



    this.AdminService.patchEmpleado(id, data);
    window.location.reload();

    this.closePopUp();
  }



  closePopUp() {
    this.ref.close()
  }
}
type dataEmpleado = {
  nombre: string;
  rolId: Number;


};