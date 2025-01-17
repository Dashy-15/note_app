import { useState } from 'react';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import NoteForm from './components/Form/NoteForm';
import NoteProvider from './Notes/NoteProvider';
import NoteLists from './components/Lists/NoteLists';

function App() {
  const [showForm, setShowForm] = useState(false);
  

  const showFormHandler = () => {
    setShowForm(true);
  }

  const hideFormHandler = () => {
    setShowForm(false);
  }

  

  return (
    <NoteProvider>
      <HomePage onAdd={showFormHandler} />
      {showForm && <NoteForm onClose={hideFormHandler} />}
      <NoteLists onEdit={showFormHandler}/>
    </NoteProvider>
  );
}

export default App;
