import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-tabla',
  templateUrl: './entrada-tabla.component.html',
  styleUrls: ['./entrada-tabla.component.css']
})
export class EntradaTablaComponent {
  Obj = [
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
