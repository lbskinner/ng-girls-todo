import { Component } from '@angular/core';

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
        {{ todoItem.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
}
