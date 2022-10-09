import { Component, OnInit } from '@angular/core';
import { Task, Tasks } from '../app.interfaces';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})

export class TodoformComponent implements OnInit {
    constructor(private todolistService: TodolistService) { }

    ngOnInit() { }

    // Görev Ekleme Metodu
    getInputTask() {
        const txtInput = <HTMLInputElement>document.getElementById('txtInputTask');
        const userInput = txtInput.value.trim();
        if (userInput.length > 0) {
            const newTask: Task = { id: Date.now(), description: userInput, isDone: false };
            this.todolistService.addTask(newTask);
            txtInput.value = '';
        }
    }
}
