import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';
import { CleanPipe } from '../clean.pipe';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent {

  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }
}
