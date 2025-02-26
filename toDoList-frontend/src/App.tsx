import { DndContext, DragEndEvent } from "@dnd-kit/core"
import Droppable from "./Components/Droppable/Droppable"
import { SyntheticEvent, useEffect, useState } from "react";
import { getToDo,  addToDo, moveToDo, deleteToDo } from "./api";
import AddToDoItem from "./Components/ToDoItem/AddToDoItem/AddToDoItem";
import './App.css'

function App() {
  const [toDoList, setToDoList] = useState<ToDoListResponse[]>([]);
  const [doneList, setDoneList] = useState<ToDoListResponse[]>([]);
  const [newToDoItem, setNewToDoItem] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchToDo = async () => {
      const response = await getToDo();
      setToDoList(response.data.filter((item) => item.dashboardId === 1));
    };
    fetchToDo();
    const fetchDone = async () => {
      const response = await getToDo();
      setDoneList(response.data.filter((item) => item.dashboardId === 2));
    };
    fetchDone();
  }, [])

  const handleDragEnd = (event: DragEndEvent) => {
    if (!event.over) return;

    let item = [...toDoList, ...doneList].filter((item) => item.id === event.active.id)[0];
    console.log(item);
    if(item.dashboardId != event.over.id){
      if (item.dashboardId === 1){
        item.dashboardId = 2;
        item.isDone = true;
        setDoneList(prev => [...prev, item]);
        setToDoList(prev => prev.filter((item) => item.id !== event.active.id));
        moveToDo(item);
      }
      else{
        item.dashboardId = 1;
        item.isDone = false;
        setToDoList(prev => [...prev, item]); 
        setDoneList(prev => prev.filter((item) => item.id !== event.active.id));
        moveToDo(item);
      }
    };
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newToDoItem === ""){
      setError("Укажите текст задачи");
      return;
    }

    const newItem = {
      id: 0,
      title: newToDoItem,
      isDone: false,
      dashboardId: 1,
      createdAt: new Date()
    };

    let reponse = await addToDo(newItem);

    newItem.id = reponse.data

    setToDoList(prev => [...prev, newItem]);
    // setNewToDoItem('');
  };

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setNewToDoItem(event.target.value);
  };

  const onSubmitDeleteHandle = async (e: SyntheticEvent, id: number) => {
    e.preventDefault();
    await deleteToDo(id);

    setToDoList(prev => prev.filter(item => item.id !== id));
    setDoneList(prev => prev.filter(item => item.id !== id));
  };


  return (
    <>
    {/* <div className="absolute inset-0 min-h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%] z-0 bg-repeat-space">  */}
      <AddToDoItem onSubmit={onSubmit} query={newToDoItem} onInput={onInput} error={error}/>
      <DndContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen flex w-screen columns-2 justify-center gap-4">
        <Droppable id="1" list={toDoList} onSubmitDeleteHandle={onSubmitDeleteHandle}>
        <p className="text-center">Выполнить:</p>
        </Droppable>
        <Droppable id="2" list={doneList} onSubmitDeleteHandle={onSubmitDeleteHandle}>
        <p className="text-center">Сделано:</p>
        </Droppable>
      </div>
      </DndContext>
    {/* </div> */}
    </>
  )
}

export default App
