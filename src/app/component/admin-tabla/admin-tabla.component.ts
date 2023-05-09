import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-tabla',
  templateUrl: './admin-tabla.component.html',
  styleUrls: ['./admin-tabla.component.css']
})
export class AdminTablaComponent {
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
