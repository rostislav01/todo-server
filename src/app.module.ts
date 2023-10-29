import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './config/prisma.config';
import { TasksService } from './tasks/tasks.service';
import { SubtasksModule } from './subtasks/subtasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TasksModule, SubtasksModule, ProjectsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
