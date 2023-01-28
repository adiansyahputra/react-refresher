import React from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const goals = [
    { id: 'cg1', text: 'Finish the cours' },
    { id: 'cg2', text: 'Learn all about the course main topic' },
    { id: 'cg3', text: 'Help other students in the course Q&A' },
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal />
      <GoalList items={goals} />
    </div>
  );
};

export default App;
