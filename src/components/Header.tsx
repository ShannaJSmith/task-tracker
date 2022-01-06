// import PropTypes from 'prop-types';
import Button from './Button';

interface Props {
  title: string;
  onAdd: () => void;
  showAddTask: boolean;
}

const Header: React.FC<Props> = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAddTask ? 'Close' : 'Add'}
        color={showAddTask ? 'maroon' : 'hotpink'}
        onClick={onAdd}
      />
    </header>
  );
};

// Header.defaultProps = {
//   title: 'Task Tracker'
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
//   onAdd: PropTypes.func,
//   showAddTask: PropTypes.bool
// };

export default Header;
