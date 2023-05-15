import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraInicioComponent } from './component/barra-inicio/barra-inicio.component';
import { MenuInicioComponent } from './component/menu-inicio/menu-inicio.component';
import { BarMenuComponent } from './component/bar-menu/bar-menu.component';
import { AlmacenTablaComponent } from './component/Almacen-Component/almacen-tabla/almacen-tabla.component';
import { EntradaTablaComponent } from './component/EntradaProductos-Component/entrada-tabla/entrada-tabla.component';
import { SalidaTablaComponent } from './component/SalidaProductos-Component/salida-tabla/salida-tabla.component';
import { ContribuyenteTablaComponent } from './component/Contribuyente-Component/contribuyente-tabla/contribuyente-tabla.component';
import { AdminTablaComponent } from './component/Administracion-Component/admin-tabla/admin-tabla.component';
import { ReportesTablaComponent } from './component/Reportes-Component/reportes-tabla/reportes-tabla.component';
import { LoginBaseComponent } from './component/login-base/login-base.component';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EditAlmacenComponent } from './component/Almacen-Component/edit-almacen/edit-almacen.component';
import { DeleteAlmacenComponent } from './component/Almacen-Component/delete-almacen/delete-almacen.component';
import { PostAlmacenComponent } from './component/Almacen-Component/post-almacen/post-almacen.component';
import { EditAdministracionComponent } from './component/Administracion-Component/edit-administracion/edit-administracion.component';
import { DeleteAdministracionComponent } from './component/Administracion-Component/delete-administracion/delete-administracion.component';
import { PostAdministracionComponent } from './component/Administracion-Component/post-administracion/post-administracion.component';
import { PostContribuyenteComponent } from './component/Contribuyente-Component/post-contribuyente/post-contribuyente.component';
import { EditContribuyenteComponent } from './component/Contribuyente-Component/edit-contribuyente/edit-contribuyente.component';
import { DeleteContribuyenteComponent } from './component/Contribuyente-Component/delete-contribuyente/delete-contribuyente.component';
import { PostEntradaProductosComponent } from './component/EntradaProductos-Component/post-entrada-productos/post-entrada-productos.component';
import { EditEntradaProductosComponent } from './component/EntradaProductos-Component/edit-entrada-productos/edit-entrada-productos.component';
import { DeleteEntradaProductosComponent } from './component/EntradaProductos-Component/delete-entrada-productos/delete-entrada-productos.component';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    LoginBaseComponent,
    EditAlmacenComponent,
    DeleteAlmacenComponent,
    PostAlmacenComponent,
    EditAdministracionComponent,
    DeleteAdministracionComponent,
    PostAdministracionComponent,
    PostContribuyenteComponent,
    EditContribuyenteComponent,
    DeleteContribuyenteComponent,
    PostEntradaProductosComponent,
    EditEntradaProductosComponent,
    DeleteEntradaProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule, MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
