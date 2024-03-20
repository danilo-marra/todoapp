import { Trash2 } from "lucide-react";
import { ChangeEvent, useState } from "react";


export interface TaskType {
  id: string;
  content: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function ContentTask({ task, tasks, setTasks }:TaskProps) {
  const [isTaskComplete, setIsTaskComplete] = useState(task.isComplete);
  
  function handleDeleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(tasksWithoutDeletedOne);
  }

  function handleTaskStyle(event: ChangeEvent<HTMLInputElement>){
    setIsTaskComplete(event.target.checked);
    setTasks(prevTasks => prevTasks.map(prevTask => {
      if(prevTask.id === task.id) {
        return { ...prevTask, isComplete: event.target.checked };
      }
      return prevTask;
    }));
  }
  

  return (
  <div className="bg-gray500 mx-8 lg:mx-auto rounded-lg text-gray100 px-8 py-6 grid grid-cols-[0fr,1fr,0fr] gap-4 items-start mt-8 max-w-5xl">

      <input onChange={handleTaskStyle} type="checkbox" className='rounded-full h-6 w-6 bg-gray500 border-blueCustom border-2 checked:text-purpledarkCustom focus:ring-0 focus:border-0 cursor-pointer' /> 

      <p className={`${isTaskComplete ? 'line-through' : ''}`}>
          {task.content}
      </p>

      <button 
        className='cursor-pointer text-gray300 hover:text-dangerCustom transition-colors flex items-center justify-center'
        onClick={() => handleDeleteTask(task.id)}
      >
        <Trash2 />
      </button>
  </div>
  )
}