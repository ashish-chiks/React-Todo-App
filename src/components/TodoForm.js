import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useGlobalContext } from "../context";

const TodoForm = () => {
  const { error, task, handleChange, handleSubmit } = useGlobalContext();

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add task..."
            value={task.info}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block btn-primary mt-3"
          onClick={(e) => e.target.blur()}
        >
          Add
        </button>
        {error && (
          <Alert variant="danger">Task should have minimum 6 letters.</Alert>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
