import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");
  // useRef hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+[]{}~`";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, charAllowed, numberAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);
  return (
    <div className="bg-slate-600 w-full h-screen">
      <div className="bg-black items-center rounded-md p-4 w-1/2 mx-auto text-orange-500 font-semibold">
        <h1
          className="text-center text-white
        text-xl font-medium
        "
        >
          Password Generator
        </h1>
        <div className="flex text-sm mt-3">
          <input
            type="text"
            className="outline-none rounded-l-md w-full p-1.5"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="bg-blue-700 text-white px-3 py-1.5 shrink-0 inline rounded-r-md  outline-none"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm mt-3 gap-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
