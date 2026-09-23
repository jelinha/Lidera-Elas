import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  

  @ViewChild('carrossel') carrosselElemento!: ElementRef;


  @ViewChild('carrosselPassos') carrosselPassosElemento!: ElementRef;

  scrollCarrossel(distancia: number) {
    if (this.carrosselElemento) {
      this.carrosselElemento.nativeElement.scrollBy({ left: distancia, behavior: 'smooth' });
    }
  }
  
  
  scrollPassos(distancia: number) {
    if (this.carrosselPassosElemento) {
      this.carrosselPassosElemento.nativeElement.scrollBy({ left: distancia, behavior: 'smooth' });
    }
  }
}