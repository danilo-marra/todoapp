import toDoLogo from '../assets/logo-todo.svg';
import { SearchBar } from './SearchBar';
import { TaskType } from './ContentTask'

interface HeaderProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}
export function Header({tasks, setTasks}:HeaderProps) {
  
  return (
    <header className="flex flex-col justify-center bg-gray700 h-52 relative">
      <div className="self-center">
        <img src={toDoLogo} alt="logo todo app" className='w-[18rem] lg:w-auto' />
      </div>
      <SearchBar
        tasks={tasks}
        setTasks={setTasks}
      />  
    </header>
  )
}