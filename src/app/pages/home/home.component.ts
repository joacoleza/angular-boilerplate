import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CarouselComponent],
})
export class HomeComponent {
  dogAstronautImages = [
    'carousel-1.png',
    'carousel-2.png',
    'carousel-3.png',
    'carousel-4.png',
    'carousel-5.png',
    'carousel-6.png',
    'carousel-7.png',
    'carousel-8.png',
    'carousel-9.png',
    'carousel-10.png',
    'carousel-11.png',
    'carousel-12.png',
    'carousel-13.png',
    'carousel-14.png',
  ];
}
