import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../Store/Todos/todos.action";

const EditTodo = () => {
  const [value, setValue] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditTodo = () => {
    editTodo(id, value, dispatch);
    navigate(`/todo/${id}`);
  };
  return (
    <div>
      <div>ID: {id}</div>
      <input
        type="text"
        placeholder="Edit todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleEditTodo}>Update Todo</button>
    </div>
  );
};

export default EditTodo;
