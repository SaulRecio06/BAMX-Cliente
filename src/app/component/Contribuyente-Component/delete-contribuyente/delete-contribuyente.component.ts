import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContribuyentesRestService } from 'src/app/services/contribuyentes-rest.service';

@Component({
  selector: 'app-delete-contribuyente',
  templateUrl: './delete-contribuyente.component.html',
  styleUrls: ['./delete-contribuyente.component.css']
})
export class DeleteContribuyenteComponent {
  id: any;

  constructor(public ref: MatDialogRef<DeleteContribuyenteComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private contribuyenteService: ContribuyentesRestService) {
    this.id = data.id;

  }
  borrar() {
    this.contribuyenteService.deleteContribuyente(this.id).subscribe((example: any) => {
      console.log(example);
    });

    window.location.reload();
    console.log(this.id);
  }
  salir() {
    this.ref.close()
  }
}