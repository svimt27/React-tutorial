import React, { memo } from 'react'
// CONCEPT: React.memo for Performance Optimization
const TaskItem = memo(({ task, onToggle, onDelete, onEdit }) => {
  return (
    <>
        <div className="task-item">
            Hello
            </div>
    </>
        
  )
});

export default TaskItem