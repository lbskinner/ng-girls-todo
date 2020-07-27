import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    // if the local storage has data, get data from it,
    // use default todo list if local storage is empty
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  saveList() {
    // add todo list to local storage
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes) {
    // find the index of the item
    const index = this.todoList.indexOf(item);
    // replace it with a new object composed of the original keys and values (...item)
    // which are overridden by the keys and values of changes
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  getTodoList() {
    return this.todoList;
  }
}
