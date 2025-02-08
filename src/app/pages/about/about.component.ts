import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [CardComponent, MatIcon],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
