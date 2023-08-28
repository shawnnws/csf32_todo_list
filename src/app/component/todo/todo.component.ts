import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup
  // todoArray!: FormArray

  constructor(private fb: FormBuilder) {}

  @Output() onFormSubmit: EventEmitter<FormGroup> = new EventEmitter()

  ngOnInit(): void {
    this.addTodo()
  }

  addTodo() {
    this.todoForm = this.fb.group({
      description: this.fb.control<string>(''),
      priority: this.fb.control<string>('Low'),
      due: this.fb.control<string>('')
    })
  }

  createTodo() {
    this.onFormSubmit.emit(this.todoForm.value)
  }

  // ngOnInit(): void {
  //   this.todoArray = this.fb.array([])
  //   this.todoForm = this.fb.group({ todos: this.todoArray })
  // }

  // addTodo() {
  //   // Construct the mini form.
  //   const todoGroup = this.fb.group({
  //     description: this.fb.control<string>(''),
  //     priority: this.fb.control<string>('Low'),
  //     due: this.fb.control<string>('')
  //   })
  //   // Push mini form to the form array.
  //   this.todoArray.push(todoGroup)
  // }
}
