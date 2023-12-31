import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/config/prisma.config';
import { TypeStatusTask } from 'src/types/status.type';

@Injectable()
export class TasksService {
  constructor(
    private readonly prisma: PrismaService){}



  async findAll() {
    try {
      const tasks = await this.prisma.task.findMany({
        include: {
          subTasks: true
        }
      });
      if (tasks.length === 0) throw new NotFoundException();
      const filteredTasks = tasks.filter((item) => item.executionDate <= item.createdAt)
      filteredTasks.forEach(item => item.status = "OVERDUE")
      return tasks;
    } catch (error) {
      throw new HttpException('Tasks not found!', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      const task = await this.prisma.task.findUnique({
        where: {
          id: +id
        }
      });
      return task;
    } catch (error) {
      throw new HttpException(`Task ${id} not found!`, HttpStatus.NOT_FOUND);
    }
  }

   async create(createTaskDto: CreateTaskDto) {
    try {
      const task = await this.prisma.task.create({
        data: createTaskDto,
      })
      return task;
    } catch(error) {
      throw new HttpException(`Task not found!`, HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.prisma.task.update({
        where: {
          id: +id
        },
        data: updateTaskDto
      })
      return task;
    } catch(error) {
      throw new HttpException(`Task not found!`, HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    try {
      const task = await this.prisma.task.delete({
        where: {
          id,
        },
      })
      return task;
    } catch(error) {
      throw new HttpException(`Task not found!`, HttpStatus.NOT_FOUND);
    }
  }
}
