import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/modal/modal.component';
import { AlmacenRestService } from 'src/app/services/almacen-rest.service';
import { EditAlmacenComponent } from '../edit-almacen/edit-almacen.component';

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

  public getJsonValue: any;
  ngOnInit(): void {
    this.AlmacenGet();
  }

  openDialog() {
    this.dialogRef.open(ModalComponent, { width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m' })
  }

  openEditDialog(id: any) {
    this.dialogRef.open(EditAlmacenComponent, {
      width: '40%', height: '620px', enterAnimationDuration: '10ms', exitAnimationDuration: '10m', data: {
        id: id['id']
      }
    })
    this.id = id['id'];

  }

  public AlmacenGet() {
    this.AlmacenService.getAlmacen().subscribe((_Response: any) => {
      this.AlmacenList = _Response;
    })
  }




}
