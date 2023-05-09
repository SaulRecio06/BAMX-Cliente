import { Component } from '@angular/core';

@Component({
  selector: 'app-contribuyente-tabla',
  templateUrl: './contribuyente-tabla.component.html',
  styleUrls: ['./contribuyente-tabla.component.css']
})
export class ContribuyenteTablaComponent {
  Obj=[
    {
      Descripcion:"Javier el millonario",
      Telefono:"6688252541",
      Direccion:"Blv.Carrona",
      RFC:"JAVRQRASDAS123"
    },
    {
      Descripcion:"mita el millonario",
      Telefono:"6682345162",
      Direccion:"Blv.Carrona",
      RFC:"mitxQRASDAS123"
    },
    {
      Descripcion:"martin el millonario",
      Telefono:"668345123",
      Direccion:"Blv.Carrona",
      RFC:"martQRASDAS123"
    },
    {
      Descripcion:"pavel el millonario",
      Telefono:"668234152",
      Direccion:"Blv.Carrona",
      RFC:"PavxQRASDAS123"
    },
    {
      Descripcion:"lerem el millonario",
      Telefono:"6688252541",
      Direccion:"Blv.Carrona",
      RFC:"LarmQRASDAS123"
    }
  ]
}
