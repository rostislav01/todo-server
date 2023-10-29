import { TypePriority, TypeStatusTask } from "src/types/status.type";

export class CreateTaskDto {
	title: string;
	description: string;
	status: TypeStatusTask;
	prioriry: TypePriority;
	executionDate: any;
}
