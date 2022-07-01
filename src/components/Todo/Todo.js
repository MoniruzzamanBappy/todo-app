import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Todo = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleAllTodoSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const about = event.target.about.value;
    const email = event.target.email.value;
    const isComplete = false;
    const todo = { name, email, about, isComplete };

    fetch(`https://shrouded-sands-59910.herokuapp.com/todo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Todo added successfully");
        event.target.reset();
      });
  };
  const handleAllTodo = () => {
    navigate("/home");
  };
  return (
    <div className="container">
      <Form onSubmit={handleAllTodoSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={user.email}
            readOnly
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Todo Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>

        <div className=" mb-3 form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            name="about"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="w-50 py-3 mx-auto">
        <button onClick={handleAllTodo} className="btn mx-auto btn-secondary">
          See All todo's
        </button>
      </div>
    </div>
  );
};

export default Todo;
