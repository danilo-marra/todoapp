import styles from './SearchBar.module.css'
import { PlusCircle } from 'lucide-react'

export function SearchBar() {
  return (
  <div className='px-6 w-full absolute -bottom-[82px] left-1/2 transform -translate-x-1/2 lg:w-[736px] lg:-bottom-7 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
    <form className='lg:flex'>
    <div className='lg:flex-auto'>
  <input 
    className='rounded-lg pl-3 text-gray300 placeholder:text-gray300 w-full h-14 border border-neutral-900 bg-gray500 
               focus:border-purpledarkCustom  focus:ring-2 focus:ring-purpledarkCustom' 
    type="text" 
    placeholder='Adicione uma nova tarefa' 
  />
</div>
      <div className='lg:ml-2'>
        <div className='max-w-96 mx-auto'>
          <button className='flex w-1/2 bg-blue-500 hover:bg-blue-400 transition-colors rounded-lg text-slate-50 min-h-10 mt-3 mx-auto lg:w-auto lg:mt-0 lg:h-14 items-center justify-center px-4 '>
            <span className='font-bold text-lg lg:text-sm'>Criar</span>
            <span className='ml-2'><PlusCircle size={20}/></span>
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}