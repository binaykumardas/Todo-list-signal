import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-list-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-form.html',
  styleUrl: './list-form.scss',
})
export class ListForm {

  todoControl = new FormControl('', {
    nonNullable: true
  });
  
  todoList = signal<TodoItem[]>([]);
  newTodo = signal('');

  constructor() {
    this.todoControl.valueChanges.subscribe(value => {
      this.newTodo.set(value);
    });
  }

  addTodo() {
    const text = this.newTodo().trim();
    if(!text) return;
    this.todoList.update((list) => [
      ...list,
      { id: Date.now(), text, completed: false }
    ])
    this.todoControl.setValue('');
  }

  toggoleTodo(id: number) {
    this.todoList.update((list) =>
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item) 
    );
  }

  deleteTodo(id: number) {
    this.todoList.update((list) => list.filter((item) => item.id !== id));
  }

    completedCount = computed(
    () => this.todoList().filter(t => t.completed).length
  );
}
