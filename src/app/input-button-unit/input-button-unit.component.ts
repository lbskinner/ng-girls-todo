import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: ` <p>input-button-unit works! The title is: {{ title }}</p> `,
  styleUrls: ['./input-button-unit.component.css'],
})

// onInit is an interface - a structure defined but not implemented as a class
// it defines which properties and/or methods should exits on the class that implements it
// OnInit is an interface for Angular Components which implement the method ngOnInit
// which is a component life-cycle method, Angular call s this menthod after component instance has been created
export class InputButtonUnitComponent implements OnInit {
  // each instance of the class has its own title property
  // can change the value of title in on instance but it remain the same in other instances
  // can declare a property without initializing it, ex. title: string; then assign a value at a later stage
  // when we declare and initialize it at the same time, type is inferred by TypeScript, so don't need to add type
  title = 'Hello World';
  constructor() {
    console.log('in constructor');
    this.changeTitle('My First Angular App');
    console.log(this.title);
  }

  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }

  ngOnInit(): void {
    // this.changeTitle('Hello');
  }
}
