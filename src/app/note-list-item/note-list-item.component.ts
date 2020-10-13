import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss'],
})
export class NoteListItemComponent {
  @Input() note: string;
  @Input() noteIndex: number;
  @Output() deleteClick: EventEmitter<number> = new EventEmitter<number>();

  handleDelete() {
    //console.log(this.note);
    this.deleteClick.emit(this.noteIndex);
  }
}
