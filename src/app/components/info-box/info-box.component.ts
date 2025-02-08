import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
  imports: [MatIconModule],
})
export class InfoBoxComponent {
  @Input() icon: string = 'info';
  @Input() text: string = 'Default info text';
}
