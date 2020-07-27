import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input type="checkbox" class="todo-checkbox" (click)="completeItem()" />
      <span class="todo-title" [ngClass]="{ 'todo-complete': item.completed }">
        {{ item.title }}
      </span>
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
  // emit an update event with the new status of the item to parent component
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
