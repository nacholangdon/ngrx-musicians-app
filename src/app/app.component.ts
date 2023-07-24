import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MusiciansComponent } from './musicians/musicians.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MusiciansComponent, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
