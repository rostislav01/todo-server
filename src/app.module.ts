import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './config/prisma.config';
import { TasksService } from './tasks/tasks.service';
import { SubtasksModule } from './subtasks/subtasks.module';


@Module({
  imports: [TasksModule, SubtasksModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
