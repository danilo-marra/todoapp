import styles from './SearchBar.module.css'
import { PlusCircle } from 'lucide-react'

export function SearchBar() {
  return (
  <div className='border-2 border-red-900 px-6 w-full absolute -bottom-[82px] left-1/2 transform -translate-x-1/2 lg:w-[736px] lg:-bottom-7 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
    <form className='lg:flex'>
      <div className='lg:flex-auto'>
        <input className='rounded-lg placeholder:text-gray-300 w-full h-14 border border-neutral-900' type="text" placeholder='Adicione uma nova tarefa' />
      </div>
      <div className='lg:ml-2'>
        <button className='flex bg-blue-500 hover:bg-blue-400 transition-colors rounded-lg text-slate-50 min-h-10 mt-3 mx-auto w-1/2 lg:w-auto lg:mt-0 lg:h-14 items-center justify-center px-4 '>
          <span className='font-bold text-lg sm:text-sm'>Criar</span>
          <span className='ml-2'><PlusCircle size={20}/></span>
        </button>
      </div>
    </form>
  </div>
  )
}