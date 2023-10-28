import { Module } from '@nestjs/common';
import { SubtasksService } from './subtasks.service';
import { SubtasksController } from './subtasks.controller';
import { PrismaService } from 'src/config/prisma.config';

@Module({
  controllers: [SubtasksController],
  providers: [SubtasksService, PrismaService],
})
export class SubtasksModule {}
