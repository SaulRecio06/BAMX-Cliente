import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { EntradaProductosComponent } from './entrada-productos/entrada-productos.component';
import { SalidaProductosComponent } from './salida-productos/salida-productos.component';
import { ContribuyentesComponent } from './contribuyentes/contribuyentes.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'almacen', component: AlmacenComponent },
  { path: 'entrada', component: EntradaProductosComponent },
  { path: 'salida', component: SalidaProductosComponent },
  { path: 'contribuyentes', component: ContribuyentesComponent },
  { path: 'admin', component: AdministracionComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'login', component: LoginComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
