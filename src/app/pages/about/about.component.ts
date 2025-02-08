import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-about',
  imports: [InfoBoxComponent, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
