import React from "react";
import { useGlobalContext } from "../context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList: items } = useGlobalContext();
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default TodoList;
