
import { useEffect } from 'react';
import './App.css'

import { useTheme } from './context/ThemeContext'
import TaskForm from './components/TaskForm';
import TaskStats from './components/TaskStats';
import SearchBar from './components/SearchBar';

function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="min-h-screen py-8 px-4 mx-auto flex flex-col justify-center items-center" >
        <div className="max-w-4xl mx-auto">
          {/* <div
            style={{
              height: "100vh",
              backgroundColor: theme === "light" ? "#ffffff" : "#222222",
              color: theme === "light" ? "#000000" : "#ffffff",
              display: "flex",
              flexDirection: "column",
              transition: "0.3s all",
            }}
          >  */}
             <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center" style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#222222",
              color: theme === "light" ? "#000000" : "#ffffff",
            }}>
              <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
              <button onClick={toggleTheme} style={{ marginTop: "20px", cursor: "pointer" }}>
                Toggle Theme
              </button>
            </div>
            <TaskForm />
            <TaskStats tasks={[]} />
            <SearchBar />
                      {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default App
