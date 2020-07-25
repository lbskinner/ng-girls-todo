import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <app-input-button-unit></app-input-button-unit>

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
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
}
