-- AlterEnum
ALTER TYPE "TaskStatus" ADD VALUE 'OVERDUE';

-- DropIndex
DROP INDEX "SubTask_taskId_key";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "executionDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
