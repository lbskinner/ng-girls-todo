import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}

      <button class="btn btn-red" (click)="removeItem()">remove</button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // tells the component to expect an input and to assign it to the class member called item
  @Input() item: TodoItem;
  // emit the remove item event to the list manager component when click on remove button
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeItem() {
    this.remove.emit(this.item);
  }
}
