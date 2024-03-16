import { Module, NestModule } from '@nestjs/common';
// import { SimpleLoggerMiddleware } from 'src/middleware/simple-logger.middleware';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';


@Module({
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule  {


}
