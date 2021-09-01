import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ls-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('buttoTogle') botonHamburger !:ElementRef;
  @ViewChild('mainList') ListaHeader!:ElementRef;
  @ViewChild('NavWrapper') ContentNav!:ElementRef;

  constructor(private rendered2:Renderer2) { 

  }

  ngOnInit(): void {
  }
  
  Animacion():void{
    const buttonAnimation = this.botonHamburger.nativeElement;
    const ListaHeader = this.ListaHeader.nativeElement;
    const navWrapper  = this.ContentNav.nativeElement;
    buttonAnimation.classList.toggle('animation-open-menu');
    ListaHeader.classList.toggle('active')
    navWrapper.classList.toggle('active-wrapeer');
  }

  close():void{
    const ListaHeader = this.ListaHeader.nativeElement;
    const navWrapper  = this.ContentNav.nativeElement;
    navWrapper.classList.toggle('active-wrapeer');
    ListaHeader.classList.toggle('active')
  }
}
