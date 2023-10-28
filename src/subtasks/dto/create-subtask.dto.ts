import { TypeStatusTask } from "src/types/status.type";

export class CreateSubtaskDto {
  title: string;
  description: string;
  status: TypeStatusTask;
	taskId: any
}
