import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { EntradaProductosComponent } from './entrada-productos/entrada-productos.component';
import { SalidaProductosComponent } from './salida-productos/salida-productos.component';
import { ContribuyentesComponent } from './contribuyentes/contribuyentes.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    AlmacenComponent,
    EntradaProductosComponent,
    SalidaProductosComponent,
    ContribuyentesComponent,
    AdministracionComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
