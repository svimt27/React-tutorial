import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="w-1/6 bg-slate-100 p-6">
          <h2 className="font-semibold ">Select Colors</h2>
          <div className="mt-3 text-center">
            <button
              onClick={() => setColor("red")}
              className="px-4 my-3 rounded-md bg-red-500 text-white font-medium"
            >
              Red
            </button>
            <button
              onClick={() => setColor("black")}
              className="px-4 my-3 rounded-md bg-black text-white font-medium"
            >
              Black
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-4 my-3 rounded-md bg-blue-500 text-white font-medium"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-4 my-3 rounded-md bg-green-700 text-white font-medium"
            >
              Green
            </button>
            <button
              onClick={() => setColor("white")}
              className="px-4 my-3 rounded-md bg-white text-black font-medium"
            >
              White
            </button>

            <button
              onClick={() => setColor("orange")}
              className="px-4 my-3 rounded-md bg-orange-500 text-white font-medium"
            >
              Orange
            </button>
          </div>
        </div>
        <div
          className="w-10/12 h-screen"
          style={{
            backgroundColor: color,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
