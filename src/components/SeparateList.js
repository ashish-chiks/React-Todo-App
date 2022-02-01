import React from "react";
import { useGlobalContext } from "../context";

const SeparateList = () => {
  const { todoList: items } = useGlobalContext();
  return (
    <div>
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Incomplete todos</h3>
        {items
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item text-capitalize d-flex justify-content-between my-2"
              >
                <h6>{item.info}</h6>
              </li>
            );
          })}
      </ul>

      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Completed todos</h3>
        {items
          .filter((item) => item.isDone)
          .map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item text-capitalize d-flex justify-content-between my-2"
              >
                <h6>{item.info}</h6>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SeparateList;
