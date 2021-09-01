import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ls-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  @ViewChild('btnMsj',{static: false}) msj!:ElementRef;
  textoMensaje:string = '';

  constructor(private rendered2:Renderer2) { }

  ngOnInit(): void {
  }
  
  detectarMsjParaMi():void{
    const envioMensaje = this.msj.nativeElement;
    envioMensaje.href = "https://api.whatsapp.com/send?phone=51954726971&text="+this.textoMensaje;
    this.textoMensaje = '';
  }
}
