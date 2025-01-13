import { Fragment, useState } from 'react';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import NoteForm from './components/Form/NoteForm';

function App() {
  const [isClick, setIsClick] = useState(false);

  const showFormHandler = () => {
    setIsClick(true);
  }

  return (
    <Fragment>
      <HomePage onShow={showFormHandler} />
      {isClick && <NoteForm />}
    </Fragment>
  );
}

export default App;
