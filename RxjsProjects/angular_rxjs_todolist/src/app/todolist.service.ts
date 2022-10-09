import { Injectable } from '@angular/core';
import { Task, Tasks } from './app.interfaces';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodolistService {
    tasks: Tasks = [];
    public objObservable: any;
    private objObserver: any;

    constructor() {
        this.objObservable = new Observable((localObserver) => {
            this.objObserver = localObserver; // objObserver'ı herhangi bir nesneden bir gözlemci nesnesine dönüştürün
            this.objObserver.next(this.tasks); 
        });
    }

    getTasks(): Observable<Tasks> {
        return this.objObservable;
    }

    addTask(newTask: Task) {
        this.tasks = [...this.tasks, newTask];
        return this.objObserver.next(this.tasks);
    }

    completeTask(taskId: number) {
        const itemIndex = this.tasks.findIndex((item: Task) => item.id === taskId);
        this.tasks = this.tasks.map((item: Task, index: number) => index === itemIndex ? {...item, isDone: !item.isDone} : item);
        return this.objObserver.next(this.tasks);
    }

    removeTask(taskId: number) {
        this.tasks = this.tasks.filter((item: Task) => item.id !== taskId);
        return this.objObserver.next(this.tasks);
    }

    removeCompleted() {
        this.tasks = this.tasks.filter((item: Task) => !item.isDone);
        return this.objObserver.next(this.tasks);
    }

    filteredTasks(status: boolean, taskList: Tasks) {
        console.log(status)
        return taskList.filter((item: Task) => item.isDone === status);
    }

    // 

}
