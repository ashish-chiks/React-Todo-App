import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const TodoItem = ({ item }) => {
  const { handleClick } = useGlobalContext();

  const Wrapper = styled.section`
  .red {
    background-color: red;
    color: white
  }
  `;

  return (
    <Wrapper>
      <li
        className={`list-group-item text-capitalize d-flex justify-content-between my-2 ${
          item.isDone ? "red" : null
        }`}
        onClick={() => handleClick(item.id)}
      >
        <h6>{item.info}</h6>
      </li>
    </Wrapper>
  );
};

export default TodoItem;
