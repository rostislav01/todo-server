import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';
import { PrismaService } from 'src/config/prisma.config';

@Injectable()
export class SubtasksService {
  constructor(readonly prisma: PrismaService) {}

  async create(createSubtaskDto: CreateSubtaskDto) {
    try {
      const subTask = await this.prisma.subTask.create({
        data: createSubtaskDto
      })
      return subTask;
    } catch (error) {
      throw new HttpException(`Task not found!`, HttpStatus.NOT_FOUND);
    }
  }

  findAll() {
    return `This action returns all subtasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subtask`;
  }

  update(id: number, updateSubtaskDto: UpdateSubtaskDto) {
    return `This action updates a #${id} subtask`;
  }

  remove(id: number) {
    return `This action removes a #${id} subtask`;
  }
}
