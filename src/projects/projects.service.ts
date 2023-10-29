import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/config/prisma.config';

@Injectable()
export class ProjectsService {
  constructor(readonly prisma: PrismaService) {}

  async create(createProjectDto: CreateProjectDto) {
    try {
      const project = await this.prisma.project.create({
        data: createProjectDto,
      })
      return project;
    } catch(error) {
      throw new HttpException(`Project not found!`, HttpStatus.NOT_FOUND);
    }
  }

  async findAll() {
    try {
      const projects = await this.prisma.project.findMany({
        include: {
          tasks: true
        }
      });
      if (projects.length === 0) throw new NotFoundException();
      return projects;
    } catch (error) {
      throw new HttpException('Tasks not found!', HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number) {
    try {
      const projects = await this.prisma.project.findUnique({
        include: {
          tasks: true
        },
        where: {
          id
        }
      });
      return projects;
    } catch (error) {
      throw new HttpException('Tasks not found!', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const project = await this.prisma.project.update({
        where: {
          id
        },
        data: updateProjectDto
      });
      return project;
    } catch (error) {
      throw new HttpException('Tasks not found!', HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    try {
      const tasks = await this.prisma.task.deleteMany({
        where: {
          project: {
            id
          }
        }
      })
      const projects = await this.prisma.project.delete({
        where: {
          id
        },
      });
      return projects;
    } catch (error) {
      throw new HttpException('Tasks not found!', HttpStatus.NOT_FOUND);
    }
  }
}
