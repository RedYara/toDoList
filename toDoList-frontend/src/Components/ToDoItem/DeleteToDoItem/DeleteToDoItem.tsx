import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { SyntheticEvent } from 'react'

interface Props {
    onSubmitDeleteHandle: (e: SyntheticEvent, id: number) => void;
    id: number;
}

const DeleteToDoItem = ({onSubmitDeleteHandle: onSubmitHandle, id}: Props) => {
  return (
    <form onSubmit={(e) => onSubmitHandle(e, id)}>
        <button className='cursor-pointer border-2 p-1 px-2 rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300' type='submit'>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    </form>
  )
}

export default DeleteToDoItem