import toDoLogo from '../assets/logo-todo.svg';
import styles from './Header.module.css'
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header className="flex flex-col justify-center bg-slate-950 h-52 relative">
      <div className="self-center border-2">
        <img src={toDoLogo} alt="logo todo app" className='w-[18rem] lg:w-auto' />
      </div>
      <SearchBar/>  
    </header>
  )
}