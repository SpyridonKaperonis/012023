import './App.css';
import  {NavBar} from './components/navBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScrollView } from './components/scrollView';
import {styles} from './pages/styles';

import { About } from './pages/about';
import { Resume } from './pages/resume';
import { Projects } from './pages/projects';
import { Intro } from './pages/intro';

function App() {

  const DateTime = new Date();


  return (
    <Router>
      <div style={styles.ParentContainer}>
        <div style={styles.NavBar}>
          <NavBar date={DateTime}/>
        </div>
        <div style={styles.scrollviewContainer}>
          <div style={styles.ScrollView}>
            <Routes>
              <Route exact path='/' element={<Intro/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/projects' element={<Projects/>} />

            </Routes>
           
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
