import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraInicioComponent } from './component/barra-inicio/barra-inicio.component';
import { MenuInicioComponent } from './component/menu-inicio/menu-inicio.component';
import { BarMenuComponent } from './component/bar-menu/bar-menu.component';
import { AlmacenTablaComponent } from './component/almacen-tabla/almacen-tabla.component';
import { EntradaTablaComponent } from './component/entrada-tabla/entrada-tabla.component';
import { SalidaTablaComponent } from './component/salida-tabla/salida-tabla.component';
import { ContribuyenteTablaComponent } from './component/contribuyente-tabla/contribuyente-tabla.component';
import { AdminTablaComponent } from './component/admin-tabla/admin-tabla.component';
import { ReportesTablaComponent } from './component/reportes-tabla/reportes-tabla.component';
import { RouterModule } from '@angular/router';
import { LoginBaseComponent } from './component/login-base/login-base.component';
import { HttpClientModule } from '@angular/common/http'
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarraInicioComponent,
    MenuInicioComponent,
    BarMenuComponent,
    AlmacenTablaComponent,
    EntradaTablaComponent,
    SalidaTablaComponent,
    ContribuyenteTablaComponent,
    AdminTablaComponent,
    ReportesTablaComponent,
    LoginBaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
