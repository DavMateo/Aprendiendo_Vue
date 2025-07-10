import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteCardComponent {
  note = input<Note>();

  constructor(public noteService: NoteService) {}

  logRendered() {
    console.log('Note Component Rendered');
  }

  updateTitle(id: string | undefined, e: Event) {
    if (!id) return;
    const inputHtml = e.target as HTMLInputElement;

    this.noteService.updateTitle(id, inputHtml.value)
  }

  updateMarked(id: string | undefined) {
    if (!id) return;
    this.noteService.updateMarked(id);
  }
}
