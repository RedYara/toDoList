import { DndContext, DragEndEvent } from "@dnd-kit/core"
import Droppable from "./Components/Droppable/Droppable"
import { useEffect, useState } from "react";
import { getDone, getToDo } from "./api";

function App() {
  const [toDoList, setToDoList] = useState<ToDoList[]>([]);
  const [doneList, setDoneList] = useState<ToDoList[]>([]);

  useEffect(() => {
    const fetchToDo = async () => {
      const data = await getToDo();
      setToDoList(data);
    };
    fetchToDo();
    const fetchDone = async () => {
      const data = await getDone();
      setDoneList(data);
    };
    fetchDone();
  }, [])

  const handleDragEnd = (event: DragEndEvent) => {
    if (!event.over) return;

    let item = [...toDoList, ...doneList].filter((item) => item.id === event.active.id)[0];
    console.log(item);
    if(item.droppableId != event.over.id){
      if (item.droppableId === 1){
        item.droppableId = 2;
        setDoneList(prev => [...prev, item]);
        setToDoList(prev => prev.filter((item) => item.id !== event.active.id));
      }
      else{
        item.droppableId = 1;
        setToDoList(prev => [...prev, item]);
        setDoneList(prev => prev.filter((item) => item.id !== event.active.id));
      }
    };
  };
  

  return (
    <>
    <DndContext onDragEnd={handleDragEnd}>
        <div className="h-screen flex justify-center items-center text-center gap-4">
          <div>
            <Droppable id="1" list={toDoList}>
              <p>Выполнить:</p>
            </Droppable>
          </div>
          <div>
            <Droppable id="2" list={doneList}>
              <p>Сделано:</p>
            </Droppable>
          </div>
        </div>
    </DndContext>
    </>
  )
}

export default App
