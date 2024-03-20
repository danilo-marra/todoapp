import './global.css'
import './App.css'
import { Header } from './components/Header'
import { CreatedTasks } from './components/CreatedTasks'
import { DoneTasks } from './components/DoneTaks'
import { ContentTask } from './components/ContentTask'
import { TaskType } from './components/ContentTask'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: uuidv4(),
      content: 'Ir à academia',
      isComplete: true,
    },
    {
      id: uuidv4(),
      content: 'Brincar com os filhos',
      isComplete: false,
    },
    {
      id: uuidv4(),
      content: 'Estudar React e node.js',
      isComplete: true,
    },
  ])

  return (
    <div>
      <Header
        tasks={tasks}
        setTasks={setTasks}
       />
      <section className="mt-[7rem] text-sm max-w-md px-2 sm:max-w-screen-sm lg:max-w-screen-lg mx-auto lg:mt-20 flex justify-between items-center font-bold">
        <CreatedTasks 
          tasks={tasks} 
        />
        <DoneTasks
          tasks={tasks}
          totalCompletedTasks={tasks.filter(task => task.isComplete).length}
        />
      </section>
      <section className='mt-4'>
        {tasks.map((task) => {
          return (
            <ContentTask
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })}

      </section>
    </div>
  )
}