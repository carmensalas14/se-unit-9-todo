import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTask = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTask(input.value));
          input.value = '';
        }}
      >
        {/* referencing input element to be used in the rest of component */}
        <input type="text" ref={(el) => (input = el)} />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default connect()(AddTask);
