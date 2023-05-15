import { HttpClient } from '@angular/common/http';
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';

@Component({
  selector: 'app-delete-almacen',
  templateUrl: './delete-almacen.component.html',
  styleUrls: ['./delete-almacen.component.css']
})
export class DeleteAlmacenComponent {
  id: any;

  constructor(public ref: MatDialogRef<DeleteAlmacenComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private almacenService: AlmacenRestService) {
    this.id = data.id;

  }
  borrar() {
    this.almacenService.deleteAlmacen(this.id).subscribe((example: any) => {
      console.log(example);
    });

    window.location.reload();
    console.log(this.id);
  }
  salir() {
    this.ref.close()
  }

}


