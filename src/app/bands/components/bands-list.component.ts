import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Band } from '../band.model';
import { LoaderComponent } from 'src/app/shared/loader.component';

@Component({
  selector: 'app-band-list',
  standalone: true,
  imports: [NgIf, NgFor, LoaderComponent],
  template: `
    <div
      *ngIf="isLoading"
      style="display: flex; justify-content: center; align-items: center; min-height: 300px;"
    >
      <app-loader />
    </div>
    <p *ngIf="!isLoading && bands.length === 0">No bands were found.</p>

    <section class="card-container" *ngIf="!isLoading && bands.length">
      <article class="card" *ngFor="let band of bands">
        <img
          [src]="band.photoUrl || defaultImage"
          [alt]="band.name + ' Photo'"
        />
        <h3>{{ band.name }}</h3>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BandListComponent {
  @Input() bands: Band[] = [];
  @Input() isLoading = false;

  defaultImage = 'assets/no-pic.jpg';
}
