import { Injectable } from '@nestjs/common';
import { Task } from 'src/task.model';
@Injectable()
export class TasksService {
    private tasks: Task[] = [];


    createTask(title: string, description: string): Task {
        const task: Task = {
            title, description, id: this.tasks.length + 1, status: "OPEN"
        }
        this.tasks.push(
            task
        )
        return task
    }

    getAll(): Task[] {
        return this.tasks;
    }

    getById(id: number): Task {
        id = Number(id);
        // console.log(`TYPE od number `, typeof id);
        console.log(this.tasks);
        const task: Task = this.tasks.find(el => el.id === id)
        return task;
    }

    updateTaskStatus(id: number, status: "OPEN" | "DONE"): Task {
        const task = this.getById(id)
        if (task) {
            task.status = status;
        }
        return task;
    }
    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(el => el.id != id);

    }
}
