// import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
      <div className="form-control">
        <label> Task </label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="form-control">
        <label> Day & Time </label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label> Set Reminder </label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save" />
    </form>
  );
};

// AddTask.propTypes = {};

export default AddTask;
