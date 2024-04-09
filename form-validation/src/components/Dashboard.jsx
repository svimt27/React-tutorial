import { useState, useEffect, useContext } from "react";
import { EmployeeDetails } from "../EmployeeDetails";
import userContext from "../context/userContext";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  const intialValues = { id: "", name: "", role: "", status: "" };
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState(intialValues);
  const user = useContext(userContext);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(EmployeeDetails));
  }, []);

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));
    setTodos(todo);
    console.log(todos);
    console.log(user);
  }, []);

  // Add item
  const addData = (d) => {
    if (d) {
      let obj = { id: Date.now(), name: d, role: "", status: "" };
      setTodos((prev) => [obj, ...prev]);
    }
  };

  // Delete item
  const deleteList = (id) => {
    console.log(id);
    if (id > 0) {
      if (window.confirm("Are you sure want to delete this item?")) {
        const dt = todos.filter((el) => el.id != id);
        setTodos(dt);
      }
    }
    //   // setTodos((prev) => prev.filter((el) => el.id != id));
  };

  const editTodo = (id) => {
    //   // todos[todos.indexOf(todos.filter((el) => el.id === id)[0])] = todo;
    //   const et = todos.filter((el) => el.id === id);
    //   // setUpdateTodo(et[0]);
    //   setData(et[0]);
    //   console.log(data);
  };

  const todoList = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="w-full h-full">
      {/* <div className="border-1 w-1/5 rounded-lg flex mt-3">
        <input
          type="text"
          className="outline-none rounded-tl-md rounded-bl-md px-2 bg-slate-100"
          placeholder="Todo"
          name="todo"
          id="todo"
          value={data}
          onChange={(e) => todoList(e)}
        />
        <button
          onClick={() => addData(data)}
          className="text-white bg-[#4E989F]  hover:bg-[#4db0b9]  focus:ring-4 focus:ring-[#4db0b9] font-medium rounded-tr-md rounded-br-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
        >
          Add Data
        </button>
      </div>
      <ul className="mt-2 border p-2 w-1/5   rounded-md">
        {todos.map((todo) => (
          <li key={todo.id} className="mt-2">
            {" => " + todo.title}
            <button
              onClick={() => editTodo(todo.id)}
              className="text-white ml-3 bg-slate-500  hover:bg-slate-600  focus:ring-4 focus:ring-slate-300 font-medium rounded-tl-md rounded-bl-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              Edit
            </button>
            <button
              onClick={() => deleteList(todo.id)}
              className="text-white bg-red-500  hover:bg-red-600  focus:ring-4 focus:ring-red-300 font-medium rounded-tr-md rounded-br-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}

      <div className="border-1 rounded-lg flex justify-center mt-4">
        <input
          type="text"
          className="outline-none rounded-tl-md rounded-bl-md px-2 bg-slate-100"
          placeholder="Todo"
          name="todo"
          id="todo"
          onChange={(e) => todoList(e)}
        />
        <button
          onClick={() => addData(data)}
          className="text-white bg-[#4E989F]  hover:bg-[#4db0b9]  focus:ring-4 focus:ring-[#4db0b9] font-medium rounded-tr-md rounded-br-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
        >
          Add Data
        </button>
      </div>
      <h1 className="text-2xl font-medium text-center mt-4">Todo List</h1>
      <div className="flex justify-center">
        <table className="border-collapse border border-slate-500 w-1/2 rounded-md">
          <thead>
            <tr>
              <th className="border border-slate-600 p-2">S.No</th>
              <th className="border border-slate-600 p-2">Name</th>
              <th className="border border-slate-600 p-2">Designation</th>
              <th className="border border-slate-600 p-2">Status</th>
              <th className="border border-slate-600 p-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {todos.map((todo, index) => (
              <tr key={index}>
                <td className="border border-slate-600 p-2">{todo.id}</td>
                <td className="border border-slate-600 p-2">{todo.name}</td>
                <td className="border border-slate-600 p-2">{todo.role}</td>
                <td className="border border-slate-600 p-2">{todo.status}</td>
                <td className="border border-slate-600 text-center p-2">
                  <button
                    onClick={() => editTodo(todo.id)}
                    className="text-white ml-3 bg-slate-500  hover:bg-slate-600  focus:ring-4 focus:ring-slate-300 font-medium rounded-tl-md rounded-bl-md text-sm px-3 lg:px-4 py-1.5 lg:py-1.5 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteList(todo.id)}
                    className="text-white bg-red-500 ml-2 hover:bg-red-600  focus:ring-4 focus:ring-red-300 font-medium rounded-tr-md rounded-br-md text-sm px-3 lg:px-4 py-1.5 lg:py-1.5 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
