import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React, { SyntheticEvent } from "react";
import DeleteToDoItem from "../ToDoItem/DeleteToDoItem/DeleteToDoItem";

interface DraggableProps {
  title: string;
  id: number;
  createdAt: string;
  isDone: boolean;
  onSubmitDeleteHandle: (e: SyntheticEvent) => void;
}


const Draggable = ({title: text, id, onSubmitDeleteHandle, createdAt, isDone} : DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  
  const style: React.CSSProperties = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
  };

  return (
    <>
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
      <span className="text-gray-300 text-sm">{isDone ? "Выполнено" : "Создано"}: {createdAt.toString()}</span>
      <div className="flex justify-between items-center gap-2">
        <span className="text-lg">
          {text} 
        </span>
        <DeleteToDoItem onSubmitDeleteHandle={onSubmitDeleteHandle} id={id}/>
      </div>
    </div>
    
    </>
  );
};

export default Draggable;
