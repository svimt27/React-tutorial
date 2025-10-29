import React, { useMemo } from 'react'

const TaskStats = ({tasks}) => {
    const stats = useMemo(() => {
    console.log('Calculating stats...',tasks);
    return {
      total: tasks.length,
      completed: tasks.filter(t => t.completed).length,
      pending: tasks.filter(t => !t.completed).length,
      high: tasks.filter(t => t.priority === 'high' && !t.completed).length
    };
  }, [tasks]);
  console.log('stats computed:', tasks);
  
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-blue-100 p-4 rounded-lg">
        <div className="text-3xl font-bold text-blue-700">{stats.total}</div>
        <div className="text-sm text-blue-600">Total Tasks</div>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
        <div className="text-3xl font-bold text-green-700">{stats.completed}</div>
        <div className="text-sm text-green-600">Completed</div>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <div className="text-3xl font-bold text-yellow-700">{stats.pending}</div>
        <div className="text-sm text-yellow-600">Pending</div>
      </div>
      <div className="bg-red-100 p-4 rounded-lg">
        <div className="text-3xl font-bold text-red-700">{stats.high}</div>
        <div className="text-sm text-red-600">High Priority</div>
      </div>
    </div>
  )
}

export default TaskStats