import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'Mbutton',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
})
export class MenuButtonComponent {
  @Input() buttonName: string = 'Click Me';
  @Input() routerLink: string = '/customer';
}
