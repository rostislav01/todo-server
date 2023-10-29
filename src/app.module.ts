import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './config/prisma.config';
import { TasksService } from './tasks/tasks.service';
import { SubtasksModule } from './subtasks/subtasks.module';
import { ProjectsModule } from './projects/projects.module';


@Module({
  imports: [TasksModule, SubtasksModule, ProjectsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
