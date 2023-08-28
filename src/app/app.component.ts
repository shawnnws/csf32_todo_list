import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf32_workshop';

  todoList: Todo[] = []

  receiveFormInput(event: Todo) {
    this.todoList.push(event)
    console.log('form submitted')
  }
}
