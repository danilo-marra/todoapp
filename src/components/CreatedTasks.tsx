import { TaskType } from './ContentTask';

interface CreatedTasksProps {
  tasks: TaskType[];
}

export function CreatedTasks({ tasks }: CreatedTasksProps) {

  function sumTotalTasks() {
    return tasks.length;
  }

  return (
    <div className='sm:text-lg'>
      <p className='text-blueCustom'>
        Tarefas criadas <span className='text-gray200 bg-gray400 inline-block rounded-full px-2.5 py-0.5'>{sumTotalTasks()}</span>
      </p>

    </div>
  )
}