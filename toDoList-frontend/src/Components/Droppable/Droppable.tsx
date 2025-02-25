import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import Draggable from '../Draggable/Draggable';

const Droppable = (props:any) => {
  const {isOver, setNodeRef, over} = useDroppable({
    id: props.id,
  });

  return (
    <div ref={setNodeRef} className='columns-1 flex flex-col gap-4 bg-gray-200 p-4 rounded-md shadow-md w-100'>
      {props.children}
      {props.list.map((item:any) => {
        return (
          <Draggable text={item.text} id={item.id} />
        );
      })}
    </div>
  );
}

export default Droppable;