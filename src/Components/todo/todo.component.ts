import { Component } from '@angular/core';
import { Task } from '../../Model/task.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks: Task[] = [];
  completedTask: Task[] = [];
  taskDescription: string = undefined;
  currentId: number = 0;

  form: FormGroup = this.fb.group({
    TaskDescription: [''],
  })
  constructor(private fb: FormBuilder) { }

  public addTask(): void {
    if (!this.taskDescription || !this.taskDescription.trim() || !/^[^\s0-9].*$/.test(this.taskDescription)) {
      alert('Invalid Task Description. First character should not be a number or whitespace.');
      this.form.reset();
      return;
    }


    this.tasks.push(new Task(this.currentId, this.taskDescription, false));
    this.currentId++;
    this.form.reset();

  }

  public editTask(index: number): void {
    this.tasks[index].description = prompt('Edit Task', this.tasks[index].description);
  }

  public deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  public completeTask(index: number): void {
    this.tasks[index].completed = true;
    this.completedTask.push(this.tasks.splice(index, 1)[0]);
  }
}
