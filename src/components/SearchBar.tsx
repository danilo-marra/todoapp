import { PlusCircle } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskType } from './ContentTask'
import { v4 as uuidv4 } from 'uuid';


interface SearchBarProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function SearchBar({ tasks, setTasks }: SearchBarProps) {
  const [newTaskContent, setNewTaskContent] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    if (!newTaskContent.trim()) return;

    const newTask: TaskType = {
      id: uuidv4(),
      content: newTaskContent,
      isComplete: false,
    };

    setTasks([newTask, ...tasks]); 
    setNewTaskContent(''); 
  }

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskContent(event.target.value)
  }

  function handleNewTaskInvalid(event:ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo Obrigatório')
  }

  return (
    <div className='px-6 w-full absolute -bottom-[82px] left-1/2 transform -translate-x-1/2 lg:w-[736px] lg:-bottom-7 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
      <form className='lg:flex' onSubmit={handleCreateNewTask}>
        <div className='lg:flex-auto'>
          <input 
            className='rounded-lg pl-3 text-gray300 placeholder:text-gray300 w-full h-14 border border-neutral-900 bg-gray500 
                      focus:border-purpledarkCustom  focus:ring-2 focus:ring-purpledarkCustom' 
            type="text" 
            placeholder='Adicione uma nova tarefa' 
            value={newTaskContent}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
        </div>
        <div className='lg:ml-2'>
          <div className='max-w-96 mx-auto'>
            <button
              type='submit' 
              className='flex w-1/2 bg-blue-500 hover:bg-blue-400 transition-colors rounded-lg text-slate-50 min-h-10 mt-3 mx-auto lg:w-auto lg:mt-0 lg:h-14 items-center justify-center px-4'
            >
              <span className='font-bold text-lg lg:text-sm'>Criar</span>
              <span className='ml-2'><PlusCircle size={20}/></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
