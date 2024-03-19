import { Trash2 } from "lucide-react";


export interface TaskType {
  id: number;
  content: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
}

export function ContentTask({ task }:TaskProps) {
  return (
  <div className="bg-gray500 mx-8 lg:mx-auto rounded-lg text-gray100 px-8 py-6 grid grid-cols-[0fr,1fr,0fr] gap-4 items-start mt-8 max-w-5xl">

      <input type="checkbox" className='rounded-full h-6 w-6 bg-gray500 border-blueCustom border-2 checked:text-purpledarkCustom focus:ring-0 focus:border-0 cursor-pointer' /> 

      <p>
          {task.content}
      </p>

      <button className='cursor-pointer text-gray300 hover:text-dangerCustom transition-colors flex items-center justify-center' >
          <Trash2/>
      </button>
  </div>
  )
}