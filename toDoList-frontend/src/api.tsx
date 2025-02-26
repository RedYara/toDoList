import "./notes.d.ts";
import axios from 'axios';

const BASE_URL = "http://localhost:5141/api";


export const getToDo = async () => {
    try{
        var toDoList = await axios.get<ToDoListResponse[]>(BASE_URL + "/ToDoList/GetToDoItems");
        return Promise.resolve(toDoList);
    }
    catch (error){
        console.error(error);
        return Promise.reject(error);
    }
}

export const addToDo = async (item : ToDoListResponse) => {
    try{
        var id = await axios.put<number>(BASE_URL + "/ToDoList/AddToDoItem", item);
        return Promise.resolve(id);
    }
    catch (error){
        console.error(error);
        return Promise.reject(error);
    }
}

export const moveToDo = async (item : ToDoListResponse) => {
    try{
        await axios.post(BASE_URL + "/ToDoList/MoveToDoItem", item);
    }
    catch (error){
        console.error(error);
    }
}

export const deleteToDo = async (id : number) => {
    try{
        await axios.delete(BASE_URL + "/ToDoList/DeleteItem?id=" + id);
    }
    catch (error){
        console.error(error);
    }
}
