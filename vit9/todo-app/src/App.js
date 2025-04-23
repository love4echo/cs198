import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
// serves as the app’s main structure, bringing together TaskForm and TaskList.
