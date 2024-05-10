import React, { useState } from 'react';
import axios from 'axios';

const AddEntry = () => {
  const [project, setProject] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [hours, setHours] = useState('');


  // asyc function that handles entry addition to the backend (upon submit button)
  const handleAddEntry = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/time', { project, taskDescription, hours }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      alert('Failed to add entry');
    }
  };

  return (
    <form onSubmit={handleAddEntry}>
      <h2>Add Time Entry</h2>
      <label>
        Project:
        <input type="text" value={project} onChange={(e) => setProject(e.target.value)} />
      </label>
      <label>
        Task Description:
        <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
      </label>
      <label>
        Hours:
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddEntry;
