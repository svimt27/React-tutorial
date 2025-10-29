import { Edit, Trash2, User } from 'lucide-react';
import React, { memo } from 'react'
// CONCEPT: React.memo for Performance Optimization
const TaskItem = memo(({ task, onToggle, onDelete, onEdit }) => {
  console.log(`Rendering task: ${task.title}`);
  return (
    <>
      <div className={`p-4 border rounded-lg ${task.completed ? 'bg-gray-50' : 'bg-white'} shadow-sm`}>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="mt-1 w-5 h-5 cursor-pointer"
          />
          <div className="flex-1">
            <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            <div className="flex gap-2 mt-2 text-xs">
              <span className={`px-2 py-1 rounded ${task.priority === 'high' ? 'bg-red-100 text-red-700' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                }`}>
                {task.priority}
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {task.category}
              </span>
              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded flex items-center gap-1">
                <User size={12} /> {task.assignee}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(task)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="p-2 hover:bg-red-100 rounded text-red-600"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </>

  )
});

export default TaskItem