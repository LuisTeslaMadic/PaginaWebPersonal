import { Component, ElementRef, OnInit, ViewChild,Renderer2 } from '@angular/core';

@Component({
  selector: 'ls-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 
  @ViewChild('slider') slider!:ElementRef;
  

  constructor(private rendered2:Renderer2) {
    
   }

  ngOnInit(): void {
    
  }

  change():void{
    const asTitle = this.slider.nativeElement;
    this.rendered2.setStyle(asTitle,'color','red');
    console.log(asTitle);
  }
  next():void{
    const sliderFirst = this.slider.nativeElement;
    let sliderSection = sliderFirst.querySelectorAll('.slider-section');
    
    let sliderSectionLast = sliderSection[0];
    let sliderSectionFirst = sliderSection[1];

    sliderSectionLast.classList.toggle('slide-01');
    sliderSectionFirst.classList.toggle('slider-02');

  }
  Preview():void{
    const sliderFirst = this.slider.nativeElement;
    let sliderSection = sliderFirst.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[0];
    let sliderSectionFirst = sliderSection[1];

    sliderSectionLast.classList.toggle('slide-01');
    sliderSectionFirst.classList.toggle('slider-02');
  }

}
