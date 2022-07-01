import React from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const TableTodo = ({ item, index, refetch }) => {
  const { name, about, isComplete, _id } = item;
  const handleCompleted = (_id) => {
    const url = `https://shrouded-sands-59910.herokuapp.com/todo/${_id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isComplete: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Completed a todo");
        refetch();
      });
  };
  const handleDelete = (_id) => {
    const url = `https://shrouded-sands-59910.herokuapp.com/todo/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Deleted a todo");
        refetch();
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td className={isComplete ? "text-decoration-line-through" : ""}>
        {name}
      </td>
      <td className={isComplete ? "text-decoration-line-through" : ""}>
        {about.slice(0, 30)}
      </td>
      <td>
        <Form.Group
          onClick={() => handleCompleted(_id)}
         
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check  disabled={isComplete}
          checked={isComplete} type="checkbox" label="Completed" />
        </Form.Group>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn mx-auto btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableTodo;
