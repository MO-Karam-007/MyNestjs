import { Controller, Put, Delete, Get, Post, Param, Body } from '@nestjs/common';
import { Task } from 'src/task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksservice: TasksService) { };
    @Get()
    getAllTasks(): Task[] {
        return this.tasksservice.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): Task {
        return this.tasksservice.getById(id);
    }

    @Post()
    create(@Body() createTaskDTO: { title: string; description: string }): Task {
        return this.tasksservice.createTask(createTaskDTO.title, createTaskDTO.description);
    }

    @Put(':id/status')
    updateTaskStatus(@Param('id') id: number, @Body('status') status: "OPEN" | "DONE"): Task {
        return this.tasksservice.updateTaskStatus(id, status)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: number): void {
        this.tasksservice.deleteTask(id)
    }


}
