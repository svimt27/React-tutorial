
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import './App.css'

import { useTheme } from './context/ThemeContext'
import TaskForm from './components/TaskForm';
import TaskStats from './components/TaskStats';
import SearchBar from './components/SearchBar';
import { AlertCircle } from 'lucide-react';
import TaskItem from './components/TaskItem';
import { taskReducer } from './reducers/taskReducer';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const { theme, toggleTheme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [user] = useState({ name: 'John Doe', role: 'Developer' });

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task?.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' ||
        (filter === 'completed' && task?.completed) ||
        (filter === 'pending' && !task?.completed);
      return matchesSearch && matchesFilter;
    });
  }, [tasks, searchTerm, filter]);


  const handleAddTask = (newTask) => {
    console.log(newTask, editingTask);
    if(editingTask){
      dispatch({ type: 'EDIT_TASK', payload: { id: editingTask.id, updates:newTask } });
      setEditingTask(null);
    } else{
      dispatch({ type: 'ADD_TASK', payload: { ...newTask, completed: false, assignee: newTask?.assignee } });
    }
  }

  const handleToggleTask = useCallback((taskId) => {
    console.log(taskId);
    dispatch({ type: 'TOGGLE_TASK', payload:  taskId  });
  }, []);

  const handleDeleteTask = useCallback((id) => {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      dispatch({ type: 'DELETE_TASK', payload: id });
    }
  }, []);

  const handleEditTask = useCallback((task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);



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

          <div>
            <h1 className="text-3xl font-bold text-gray-800">Task Manager Pro</h1>
            <p className="text-gray-600">Welcome, {user.name}!</p>
          </div>
          {/* <button onClick={toggleTheme} style={{ cursor: "pointer" }}>
            <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
          </button> */}
        </div>
        <TaskForm
          onSubmit={handleAddTask}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />
        <TaskStats tasks={tasks} />
        <SearchBar onSearch={setSearchTerm}/>
        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {['all', 'pending', 'completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize ${filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
        {/* Task List */}
        <div className="space-y-3">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <AlertCircle size={48} className="mx-auto mb-4 opacity-50" />
              <p>No tasks found. Start by adding a new task!</p>
            </div>
          ) : (
            filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            ))
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  </>
)
};

export default App
