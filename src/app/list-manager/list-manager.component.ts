import { Component, OnInit } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
    <!-- catch the submit event  -->
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <!-- *ngFor is an Angular built-in directive
  works like an enhanced loop in Java
  * notation causes Angular to use the current element as a templayte when rendering the list -->
      <li *ngFor="let todoItem of todoList">
        <!-- The item here in square brackets is the same as declared as the component's @Input -->
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css'],
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  constructor() {}

  ngOnInit(): void {}

  addItem(title: string) {
    this.todoList.push({ title });
  }
}