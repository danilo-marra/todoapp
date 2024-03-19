import './global.css'
import './App.css'
import { Header } from './components/Header'
import { CreatedTasks } from './components/CreatedTasks'
import { DoneTasks } from './components/DoneTaks'
import { ContentTask } from './components/ContentTask'
import { TaskType } from './components/ContentTask'
import { useState } from 'react'



export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      content: 'Ir à academia',
      isComplete: true,
    },
    {
      id: 2,
      content: 'Brincar com os filhos',
      isComplete: false,
    },
    {
      id: 3,
      content: 'Estudar React e node.js',
      isComplete: true,
    },
  ])

  return (
    <div>
      <Header />
      <section className="mt-[7rem] lg:mt-20 flex justify-around items-center font-bold">
      <CreatedTasks 
        totalTasks={tasks} 
      />
        <DoneTasks/>
      </section>
      <section className='mt-4'>
        {tasks.map((task) => {
          return (
            <ContentTask
              key={task.id}
              task={task}
            />
          );
        })}

      </section>
    </div>
  )
}