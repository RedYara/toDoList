import "./notes.d.ts";


export const getToDo = async () => {
    let toDoList = [
        {
            id: 1,
            text: "Тяни",
            droppableId: 1
        },
        {
            id: 2,
            droppableId: 1,
            text: "Написать"
        },
        {
            id: 3,
            text: "Позвонить",
            droppableId: 1
        }
    ];
    return Promise.resolve(toDoList);
}

export const getDone = async () => {
    let toDoList = [
        {
            id: 4,
            text: "Покурить",
            droppableId: 2
        },
        {
            id: 5,
            text: "Попить",
            droppableId: 2
        },
        {
            id: 6,
            text: "Посидеть",
            droppableId: 2
        }
    ];
    return Promise.resolve(toDoList);
}