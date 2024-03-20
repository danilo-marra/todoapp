import { TaskType } from "./ContentTask";

interface DoneTasksProps {
  tasks: TaskType[];
  totalCompletedTasks : number;
}

export function DoneTasks({ tasks, totalCompletedTasks  }: DoneTasksProps) {

  function tasksCompleted(): string {
    const totalTasks = tasks.length;

    return `${totalCompletedTasks} de ${totalTasks }`;
  }

  return (
    <div className="sm:text-lg">
      <p className='text-purpleCustom'>Concluídas <span className='text-gray200 bg-gray400 inline-block rounded-full px-2.5 py-0.5'>{tasksCompleted()}</span></p>
    </div>
  )
}
