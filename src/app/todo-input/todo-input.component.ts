import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import type { Todo } from '../app.component'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.sass']
})
export class TodoInputComponent implements OnInit {
  @Input() todos!: Todo[]
  @Input() addTodo!: (text: string) => void
  @Output() todoInputText: EventEmitter<string> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  retrieveTodoText(input: HTMLInputElement) {
    this.todoInputText.emit(input.value)

    this.addTodo(input.value)
  }
}
