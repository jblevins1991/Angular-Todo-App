import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  todos: Todo[] = []

  addTodo(text: string) {
    this.todos.push({ text })
  }

  deleteTodo(index: number) {
    this.todos = this.todos.filter((todo: Todo, filterIndex: number) => {
      return index !== filterIndex
    })
  }
}

interface Todo {
  text: String
}

export type {
  Todo
}
