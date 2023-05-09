import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes-tabla',
  templateUrl: './reportes-tabla.component.html',
  styleUrls: ['./reportes-tabla.component.css']
})
export class ReportesTablaComponent {
  Obj=[
    {
      Nombre:"Recio",
      Rol:"Administrativo"
    },
    {
      Nombre:"Mario",
      Rol:"Mecanico de Camiones"
    },
    {
      Nombre:"Reina",
      Rol:"Directora"
    },
    {
      Nombre:"Martin",
      Rol:"Ejecutivo"
    },
    {
      Nombre:"Leti",
      Rol:"Secretaria"
    }
  ]
}
