import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

interface DraggableProps {
  text: string;
  id: number;
}


const Draggable = ({text, id} : DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  
  const style: React.CSSProperties = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
      {text}
    </button>
  );
};

export default Draggable;
