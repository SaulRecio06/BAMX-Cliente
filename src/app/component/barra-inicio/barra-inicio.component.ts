import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-barra-inicio',
  templateUrl: './barra-inicio.component.html',
  styleUrls: ['./barra-inicio.component.css']
})
export class BarraInicioComponent {
  @Input() OptionSala:string="";
  @Input() Bar:string="";

  OpenMenu:string="bar";
  Flag:boolean=true;
  StrButton:string="icons8-menu-48";
  OpenBar:string ="Open-Bar";
  openBarMenu(){
    if(this.Flag){
      this.Flag=false;
      this.OpenMenu="Act";
      this.StrButton="cerrar-48";
      this.OpenBar="Closer-Bar";
    }else{
      this.Flag=true;
      this.OpenMenu="bar";
      this.StrButton="icons8-menu-48";
      this.OpenBar="Open-Bar"
    }
  }
}
