import './global.css'
import './App.css'
import { Header } from './components/Header'
import { Trash2 } from 'lucide-react'


export function App() {
  return (
    <div>
      <Header/>
      <section className="wrapperTasks mt-[7rem] lg:mt-20 flex justify-around items-center font-bold">
        <div>
          <p className='text-blueCustom'>Tarefas criadas <span className='text-gray200 bg-gray400 inline-block rounded-full px-2.5 py-0.5'>5</span></p>
        </div>
        <div>
          <p className='text-purpleCustom'>Concluídas <span className='text-gray200 bg-gray400 inline-block rounded-full px-2.5 py-0.5'>2 de 5</span></p>
        </div>
      </section>
      <section className='wrapperContentTasks mt-4'>

        <div className="contentTask bg-gray500 mx-8 lg:mx-auto rounded-lg text-gray100 px-8 py-6 grid grid-flow-col gap-4 items-center mt-8 max-w-5xl ">
            <input type="checkbox" className='rounded-full h-6 w-6 bg-gray500 border-blueCustom border-2 checked:text-purpledarkCustom focus:ring-0 focus:border-0 active:border-0 cursor-pointer items-start' /> 

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad placeat ullam aliquid, modi, consequuntur ipsum, praesentium est ducimus blanditiis saepe officia quae consequatur dignissimos vel asperiores fugiat? Dolores, nostrum.
            </p>

            <button className='cursor-pointer text-gray300 hover:text-dangerCustom transition-colors' >
              <Trash2/>
            </button>
        </div>       
        <div className="contentTask bg-gray500 mx-8 lg:mx-auto rounded-lg text-gray100 px-8 py-6 grid grid-flow-col gap-4 items-center mt-8 max-w-5xl ">
            <input type="checkbox" className='rounded-full h-6 w-6 bg-gray500 border-blueCustom border-2 checked:text-purpledarkCustom focus:ring-0 focus:border-0 active:border-0 cursor-pointer items-start' /> 

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad placeat ullam aliquid, modi, consequuntur ipsum, praesentium est ducimus blanditiis saepe officia quae consequatur dignissimos vel asperiores fugiat? Dolores, nostrum.
            </p>

            <button className='cursor-pointer text-gray300 hover:text-dangerCustom transition-colors' >
              <Trash2/>
            </button>
        </div>       
        <div className="contentTask bg-gray500 mx-8 lg:mx-auto rounded-lg text-gray100 px-8 py-6 grid grid-flow-col gap-4 items-center mt-8 max-w-5xl ">
            <input type="checkbox" className='rounded-full h-6 w-6 bg-gray500 border-blueCustom border-2 checked:text-purpledarkCustom focus:ring-0 focus:border-0 active:border-0 cursor-pointer items-start' /> 

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad placeat ullam aliquid, modi, consequuntur ipsum, praesentium est ducimus blanditiis saepe officia quae consequatur dignissimos vel asperiores fugiat? Dolores, nostrum.
            </p>

            <button className='cursor-pointer text-gray300 hover:text-dangerCustom transition-colors' >
              <Trash2/>
            </button>
        </div>       

      </section>
    </div>
  )
}