import PropTypes from 'prop-types';
import Alert from './Alert';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  const [alert, setAlert] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    // if nothing is inputted give an alert
    if (!text) {
      // alert('Please add a task');
      setAlert(true);
      return;
    }
    // if input is present, add it. Then reset/clear the form
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
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
          checked={reminder}
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      {alert && <Alert />}
      <input className="btn btn-block" type="submit" value="Save" />
    </form>
  );
};

AddTask.propTypes = {
  onAdd: PropTypes.func
};

export default AddTask;
