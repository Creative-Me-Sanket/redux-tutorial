
import './App.css';
import {Routes, Route} from 'react-router-dom'

import QuestionOne from './registration/Screens/QuestionOne';
import QuestionTwo from './registration/Screens/QuestionTwo';
import QuestionThree from './registration/Screens/QuestionThree';
import Landing from './registration/Screens/Landing';



function App() {
  return (

    <>
      <Routes>

        <Route path='/' element={<QuestionOne />} />
        <Route path='/question-two' element={<QuestionTwo />} />
        <Route path='/question-three' element={<QuestionThree />} />
        <Route path='/landing-page' element={<Landing />}/>
      </Routes>
    </>
  
  );
}

export default App;
