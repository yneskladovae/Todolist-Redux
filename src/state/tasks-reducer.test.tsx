import {addTaskAC, changeCheckboxStatusAC, removeTaskAC, TasksReducer, updateTaskTitleAC} from "./tasks-reducer";
import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistAC, RemoveTodolistAC} from "./todolists-reducer";

// const startState: TasksStateType = {
//     "todolistId1": [
//         {id: "1", title: 'HTML&CSS', isDone: true},
//         {id: "2", title: 'JS', isDone: true},
//         {id: "3", title: 'ReactJS', isDone: false},
//     ],
//     "todolistId2": [
//         {id: "1", title: 'HTML&CSS', isDone: true},
//         {id: "2", title: 'JS', isDone: true},
//         {id: "3", title: 'ReactJS', isDone: true},
//     ]
// };

let startState: TasksStateType;

beforeEach(() => {
    startState = {
        "todolistId1": [
            {id: "1", title: 'HTML&CSS', isDone: true},
            {id: "2", title: 'JS', isDone: true},
            {id: "3", title: 'ReactJS', isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: 'HTML&CSS', isDone: true},
            {id: "2", title: 'JS', isDone: true},
            {id: "3", title: 'ReactJS', isDone: true},
        ]
    };
})

test('correct task should be deleted from correct array', () => {
    const action = removeTaskAC("todolistId2", "2");
    const endState = TasksReducer(startState, action)

    expect(endState).toEqual({
        "todolistId1": [
            {id: "1", title: 'HTML&CSS', isDone: true},
            {id: "2", title: 'JS', isDone: true},
            {id: "3", title: 'ReactJS', isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: 'HTML&CSS', isDone: true},
            {id: "3", title: 'ReactJS', isDone: true},
        ]
    });

});

test('correct task should be added to correct array', () => {
    const action = addTaskAC("todolistId2", "juice");
    const endState = TasksReducer(startState, action);

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juice");
    expect(endState["todolistId2"][0].isDone).toBe(false);
});

test('status of specified task should be changed', () => {
    const action = changeCheckboxStatusAC("todolistId2", "2", false);

    const endState = TasksReducer(startState, action)

    expect(startState["todolistId2"][1].isDone).toBe(true);
    expect(endState["todolistId2"][1].isDone).toBe(false);
    expect(endState["todolistId1"][1].isDone).toBe(true);
});

test('title of specified task should be changed', () => {
    const action = updateTaskTitleAC("todolistId2", "2", "beer");

    const endState = TasksReducer(startState, action)

    expect(endState["todolistId2"][1].title).toBe("beer");
    expect(endState["todolistId1"][1].title).toBe("JS");
});

test('new array should be added when new todolist is added', () => {
    const action = AddTodolistAC("new todolist");

    const endState = TasksReducer(startState, action)

    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {
    const action = RemoveTodolistAC("todolistId2");

    const endState = TasksReducer(startState, action)

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});