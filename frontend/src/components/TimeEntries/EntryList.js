import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/time', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEntries(res.data);
      } catch (error) {
        console.error('Failed to fetch entries');
      }
    };
    fetchEntries();
  }, [entries]);

  return (
    <div>
      <h2>Time Entries</h2>
      <ul>
        {entries.map(entry => (
          <li key={entry._id}>
            {entry.date}: {entry.project} - {entry.taskDescription} ({entry.hours} hours)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
