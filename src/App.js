import { Fragment, useState } from 'react';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import NoteForm from './components/Form/NoteForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  }

  const hideFormHandler = () => {
    setShowForm(false);
  }

  return (
    <Fragment>
      <HomePage onAdd={showFormHandler} />
      {showForm && <NoteForm onClose={hideFormHandler} />}
    </Fragment>
  );
}

export default App;
