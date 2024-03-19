import { TaskType } from './ContentTask';

interface CreatedTasksProps {
  totalTasks: TaskType[];
}

export function CreatedTasks({ totalTasks }: CreatedTasksProps) {

  function sumTotalTasks() {
    return totalTasks.length;
  }

  return (
    <div>
      <p className='text-blueCustom'>
        Tarefas criadas <span className='text-gray200 bg-gray400 inline-block rounded-full px-2.5 py-0.5'>{sumTotalTasks()}</span>
      </p>
    </div>
  )
}