import { Component } from '@angular/core';

@Component({
  selector: 'app-salida-tabla',
  templateUrl: './salida-tabla.component.html',
  styleUrls: ['./salida-tabla.component.css']
})
export class SalidaTablaComponent {
  Obj=[
    {
      Codigo:"123",
      Producto:"Jamon"
    },
    {
      Codigo:"134",
      Producto:"Manteca"
    },
    {
      Codigo:"145",
      Producto:"Polvoron"
    },
    {
      Codigo:"156",
      Producto:"Nito"
    },
    {
      Codigo:"167",
      Producto:"Lecherita"
    }
  ]
}
