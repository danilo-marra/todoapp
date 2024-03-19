import { PlusCircle } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { TaskType } from './ContentTask'



//Estado = variáveis que eu quero que o componente monitore
export function SearchBar() {
  const [tasksCreated, setTasksCreated] = useState<TaskType[]>([]); // Estado para armazenar as tarefas criadas
  const [newTaskContent, setNewTaskContent] = useState(''); // Estado para armazenar o valor do input

  // Função para lidar com a criação de uma nova tarefa
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    if (!newTaskContent.trim()) return; // Verifica se o input está vazio

    const newTask: TaskType = {
      id: tasksCreated.length + 1, // Gere um ID único para a nova tarefa (pode ser um número sequencial neste caso)
      content: newTaskContent, // Use o valor do input como conteúdo da nova tarefa
      isComplete: false, // Por padrão, a nova tarefa está incompleta
    };

    // Adicione a nova tarefa ao estado das tarefas criadas
    setTasksCreated([...tasksCreated, newTask]);

    // Limpe o valor do input após adicionar a tarefa
    setNewTaskContent('');
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
        value={newTaskContent} // Valor do input controlado pelo estado
        onChange={(e) => setNewTaskContent(e.target.value)} // Atualiza o estado com o valor do input

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
    <div className='text-pink-400'>
        {tasksCreated.map(task => (
          <div>
            <p>{task.id}</p>
            <p>{task.content}</p>
            <p>{task.isComplete}</p>
          </div>

        ))}
      </div>
  </div>
  )
}