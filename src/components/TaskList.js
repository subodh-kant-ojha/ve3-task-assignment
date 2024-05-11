
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('/tasks');
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/add">
        <button className="btn btn-primary">Add Task</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate.toISOString().slice(0, 10)}</td>
              <td>
                <Link to={`/edit/${task.id}`}>
                  <button className="btn btn-secondary">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;