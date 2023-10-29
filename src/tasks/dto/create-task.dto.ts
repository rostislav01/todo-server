import { TypePriority } from "src/types/priority.type";
import { TypeStatusTask } from "src/types/status.type";

export class CreateTaskDto {
	title: string;
	description: string;
	status: TypeStatusTask;
	prioriry: TypePriority;
	executionDate: Date;
	projectId: number;
}
