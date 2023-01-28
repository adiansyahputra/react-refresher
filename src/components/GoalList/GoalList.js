import React from 'react';

import './GoalList.css';

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <li key={goal.id}>{goal.text}</li>
      ))}
    </ul>
  );
};

export default GoalList;
