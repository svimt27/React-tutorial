
import { useEffect } from 'react';
import './App.css'

import { useTheme } from './context/ThemeContext'

function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: theme === "light" ? "#ffffff" : "#222222",
          color: theme === "light" ? "#000000" : "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.3s all",
        }}
      >
        <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
        <button onClick={toggleTheme} style={{ marginTop: "20px" }}>
          Toggle Theme
        </button>
      </div>
    </>
  )
}

export default App
