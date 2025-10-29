import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'work',
    assignee: ''
})

  useEffect(() => {
    if (editingTask) {
      setFormData(editingTask);
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!formData.title.trim()) return;
    onSubmit(formData);
    setFormData({ title: '', description: '', priority: 'medium', category: 'work', assignee: '' });    
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Task title"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Task description"
          className="w-full p-3 border rounded-lg"
          rows="3"
        />
        <div className="grid grid-cols-3 gap-4">
          <select
            value={formData.priority}
            onChange={(e) => handleChange('priority', e.target.value)}
            className="p-3 border rounded-lg"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <select
            value={formData.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="p-3 border rounded-lg"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="urgent">Urgent</option>
          </select>
          <input
            type="text"
            value={formData.assignee}
            onChange={(e) => handleChange('assignee', e.target.value)}
            placeholder="Assignee name"
            className="p-3 border rounded-lg"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
          {editingTask && (
            <button
              onClick={onCancel}
              className="px-6 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskForm;