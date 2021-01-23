import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  @Input() todos!: { text: String }[]
  @Input() deleteTodo!: (index: number) => void

  constructor() {}

  ngOnInit(): void {}
}
