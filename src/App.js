import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditTodo from "./Components/EditTodo";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TodoId from "./Components/TodoId";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/todo/:id" element={<TodoId />}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
