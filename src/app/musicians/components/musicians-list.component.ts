import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Musician } from '../musician.model';
import { LoaderComponent } from 'src/app/shared/loader.component';

@Component({
  selector: 'app-musician-list',
  standalone: true,
  imports: [NgIf, NgFor, LoaderComponent],
  template: `
    <div
      *ngIf="isLoading"
      style="display: flex; justify-content: center; align-items: center; min-height: 300px;"
    >
      <app-loader />
    </div>
    <p *ngIf="!isLoading && musicians.length === 0">No musicians were found.</p>

    <section class="card-container" *ngIf="!isLoading && musicians.length">
      <article class="card" *ngFor="let musician of musicians">
        <img
          [src]="musician.photoUrl || defaultImage"
          [alt]="musician.name + ' Photo'"
        />
        <h3>{{ musician.name }}</h3>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicianListComponent {
  @Input() musicians: Musician[] = [];
  @Input() isLoading = false;

  defaultImage = 'assets/no-pic.jpg';
}
