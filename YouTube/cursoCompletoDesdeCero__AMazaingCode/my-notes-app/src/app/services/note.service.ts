import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  // readonly API_URL = "https://caf653cbb0b384bd9c36.free.beeceptor.com/api/notes/";

  notes: Note[];

  constructor(private http: HttpClient) {
    this.notes = [
      {
        id: 'a',
        title: 'Ir al médico',
        marked: false,
      },
      {
        id: 'b',
        title: 'Contraseña del WiFi: 12345678',
        marked: false,
      },
      {
        id: 'c',
        title: 'Reunión Importante',
        marked: true,
      },
      {
        id: 'd',
        title: 'Llamar a mi amigo',
        marked: false,
      },
      {
        id: 'e',
        title: 'Comprar leche',
        marked: false,
      },
    ];
  }

  getNotes() {
    // return this.http.get<Note[]>(this.API_URL);
  }

  createNote(note: Note) {
    // return this.http.post<Note>(this.API_URL, note);
    this.notes.push(note);
  }

  updateTitle(id: string, newTitle: string) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return;

    updatedNote.title = newTitle;
  }

  updateMarked(id: string) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return;

    updatedNote.marked = !updatedNote.marked;
  }

  createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };
}
