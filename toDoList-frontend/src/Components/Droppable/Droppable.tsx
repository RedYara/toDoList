import {useDroppable} from '@dnd-kit/core';
import Draggable from '../Draggable/Draggable';


const Droppable = (props:any) => {
  const {setNodeRef} = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className='columns-1 h-full min-h-[calc(100vh-10rem)] w-1/3 mt-5 flex flex-col gap-4 bg-gray-200 p-4 shadow-md rounded-md'>
      {props.children}
      {props.list.map((item:any) => {
      return (
      <Draggable onSubmitDeleteHandle={props.onSubmitDeleteHandle} title={item.title} id={item.id} createdAt={new Date(item.createdAt).toLocaleString()} isDone={item.isDone} />
      );
      })}
    </div>
  );
}

export default Droppable;