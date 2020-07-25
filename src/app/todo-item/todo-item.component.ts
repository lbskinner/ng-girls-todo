import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: ` {{ item.title }} `,
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // tells the component to expect an input and to assign it to the class member called item
  @Input() item;
  constructor() {}

  ngOnInit(): void {}
}
