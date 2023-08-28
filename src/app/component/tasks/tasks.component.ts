import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @Input() todoList: Todo[] = []
}
