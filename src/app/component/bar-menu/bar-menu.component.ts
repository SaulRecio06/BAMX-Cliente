import { Component,AfterViewInit,Input,ViewChildren,ElementRef,QueryList } from '@angular/core';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements AfterViewInit {
  @Input() OptionSelect:string="";
  @ViewChildren('Menu') List!:QueryList<ElementRef>;
  
  ngAfterViewInit(): void {
      this.List.forEach(butt=>{
        if(butt.nativeElement.classList.contains(this.OptionSelect)){
          butt.nativeElement.id="Select"
        }
      })
  }
  
}
