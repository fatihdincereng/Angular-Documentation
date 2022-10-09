import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../app.interfaces';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
    @Input()taskStatus: boolean;
    @Input()taskList: Tasks;

    constructor(private todolistService: TodolistService) { }

    ngOnInit() { }

    handleCheck(taskId: number) {
        this.todolistService.completeTask(taskId);
    }

    handleRemove(taskId: number) {
        this.todolistService.removeTask(taskId);
    }

    handleRemoveCompleted() {
        this.todolistService.removeCompleted();
    }
}

