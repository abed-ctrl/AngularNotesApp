import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent {
  note: string;
  notes: Array<Note> = [];

  onEnter() {
    this.notes.push({ message: this.note });
    this.note = '';
  }

  onDeleteNote(indexOfNoteToDelete)
  {
    this.notes.splice(indexOfNoteToDelete, 1);
  }
}
