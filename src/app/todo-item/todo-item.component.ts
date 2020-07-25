import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: ` <div class="todo-item">{{ item.title }}</div>`,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // tells the component to expect an input and to assign it to the class member called item
  @Input() item: TodoItem;
  constructor() {}

  ngOnInit(): void {}
}
