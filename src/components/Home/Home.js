import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from './../Loading/Loading';
import TableTodo from './TableTodo';
import { useQuery } from 'react-query';

const Home = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery(
    "todo",
    ()=>fetch(`https://shrouded-sands-59910.herokuapp.com/todo?email=${user.email}`)
    .then(res=>res.json())
  );
  if(isLoading){
      return <Loading/>
  }
  const handleAddTodo = () => {
    navigate("/todo");
  };
  return (
    <div className="container">
      <h1 className="text-center">All Todo's</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Todo Name</th>
            <th>About</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {
                data?.map((item, index)=><TableTodo refetch={refetch} index={index} key={item._id} item={item}></TableTodo>)
            }
        </tbody>
      </Table>
      <div className=" py-3 w-full mx-auto">
        <button onClick={handleAddTodo} className="btn  mx-auto btn-primary">
          Add To-Do
        </button>
      </div>
    </div>
  );
};

export default Home;
