import React from 'react'

interface Props {
    query: string;
    error: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddToDoItem = ({query, onSubmit, onInput, error}: Props) => {
  return (
    <>
    <form onSubmit={onSubmit} className='bg-white p-4 border-b-3 border-b-blue-400'>
      <div className='flex justify-center items-center gap-4'>
        <p>Добавить задачу:</p>
        <input className='border-blue-500 border-2 rounded-md w-250 h-10 p-4 outline-none' placeholder='Текст задачи' type="text" value={query} onInput={onInput}/>
        <button className='border-2 rounded-4xl w-30 p-2 text-green-500 hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer border-green-500' type="submit">Добавить</button>
      </div>
      <div className="flex justify-center items-center">
        {error && <span className="text-red-500">{error}</span>} 
      </div>
    </form>
    </>
      
    
  )
}

export default AddToDoItem