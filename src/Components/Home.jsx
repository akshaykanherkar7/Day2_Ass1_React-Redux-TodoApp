import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoApi, getTodosApi } from "../Store/Todos/todos.action";
import { useEffect } from "react";
import TodoList from "./TodoList";

const Home = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    let obj = {
      id: uuid(),
      value: tasks,
      status: false,
    };
    // console.log("obj:", obj);
    addTodoApi(obj, dispatch);
  };

  useEffect(() => {
    getTodosApi(dispatch);
  }, [dispatch]);
  return (
    <div>
      <input
        type="text"
        placeholder="add something..."
        value={tasks}
        onChange={(e) => {
          setTasks(e.target.value);
          //   setTasks("");
        }}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <div>
        <TodoList></TodoList>
      </div>
    </div>
  );
};

export default Home;
