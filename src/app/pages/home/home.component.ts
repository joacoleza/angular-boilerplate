import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CarouselComponent],
})
export class HomeComponent {
  dogAstronautImages = ['carousel-1.png', 'carousel-2.png'];
}
