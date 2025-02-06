import React from 'react'
import { MainTable } from './table'
import { TasksMutateDrawer } from '../taskMutaion'

const Main2 = () => {
  return (
    <main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2 px-20 py-10'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <TasksMutateDrawer />
        </div>
        <div className=' flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0 '>
          <MainTable />
        </div>
      </main>
  )
}

export default Main2