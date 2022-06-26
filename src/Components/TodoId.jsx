import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTodById } from "../Store/Todos/todos.action";

const TodoId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoId } = useSelector((state) => state.todo);
  console.log("todoId:", todoId);

  const { value, status } = todoId;

  useEffect(() => {
    getTodById(id, dispatch);
  }, [dispatch, id]);
  return (
    <div>
      <div> ID: {id}</div>
      <div
        style={
          status
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {value}
      </div>
      <div>{status ? "Completed" : "Incompleted"}</div>
      <Link to={`/todo/${id}/edit`}>Edit</Link>
    </div>
  );
};

export default TodoId;
