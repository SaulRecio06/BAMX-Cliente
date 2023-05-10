import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenTablaComponent } from './component/almacen-tabla/almacen-tabla.component';
import { MenuInicioComponent } from './component/menu-inicio/menu-inicio.component';
import { EntradaTablaComponent } from './component/entrada-tabla/entrada-tabla.component';
import { SalidaTablaComponent } from './component/salida-tabla/salida-tabla.component';
import { ContribuyenteTablaComponent } from './component/contribuyente-tabla/contribuyente-tabla.component';
import { AdminTablaComponent } from './component/admin-tabla/admin-tabla.component';
import { ReportesTablaComponent } from './component/reportes-tabla/reportes-tabla.component';
import { LoginBaseComponent } from './component/login-base/login-base.component';

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"Login",component:LoginBaseComponent},
  {path:"Home",component:MenuInicioComponent},
  {path:"almacen",component:AlmacenTablaComponent},
  {path:"Entrada-Productos",component:EntradaTablaComponent},
  {path:"Salida-Producto",component:SalidaTablaComponent},
  {path:"Contribuyentes",component:ContribuyenteTablaComponent},
  {path:"Admin",component:AdminTablaComponent},
  {path:"Reporte",component:ReportesTablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
