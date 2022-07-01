import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Todo from "./components/Todo/Todo";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound/NotFound";
import Calendar from "./components/Home/Calendar";
import Complete from './components/Home/Complete';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/calendar"
          element={
            <RequireAuth>
              <Calendar></Calendar>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/todoComplete"
          element={
            <RequireAuth>
              <Complete />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <Todo></Todo>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
