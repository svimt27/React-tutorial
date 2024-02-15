import "./App.css";
import Card from "./components/Card";

function App() {
  let obj = {
    id: 1,
    userName: "Shivam",
    designation: "Software Developer",
  };
  let obj2 = {
    id: 2,
    userName: "Rahul",
    designation: "React Developer",
  };
  return (
    <>
      <h1 className="text-4xl font-bold">Hello world!</h1>
      <Card userDetails={obj} btnText="Click Me" />
      <Card userDetails={obj2} />
    </>
  );
}

export default App;
