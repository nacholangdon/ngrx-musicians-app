import {
  Output,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-musicians',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<div class="input-group">
    <input
      type="text"
      placeholder="e.g. AC/DC"
      [formControl]="addControl"
      (keyup.enter)="onAdd()"
    />
    <button (click)="onAdd()">Add</button>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMusicianComponent {
  readonly addControl = new FormControl('', { nonNullable: true });

  @Output() musician = new EventEmitter<string>();

  onAdd(): void {
    const musicianName = this.addControl.value.trim().toLowerCase();
    this.musician.emit(musicianName);
    this.addControl.reset();
  }
}
