import './App.css';
import  {NavBar} from './components/navBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScrollView } from './components/scrollView';
// import {styles} from './pages/styles';

import { About } from './pages/about';
import { Resume } from './pages/resume';
import { Projects } from './pages/projects';
import { Intro } from './pages/intro';

export default function App() {

  const DateTime = new Date();


  return (
    <Router>
      <div style={styles.ParentContainer}>
        <div style={styles.NavBar}>
          <NavBar date={DateTime}/>
        </div>
        <div style={styles.scrollviewContainer}>
            <Routes>
              <Route exact path='/' element={<Intro/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/projects' element={<Projects/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}




const styles = {
  Container:{
    display: "flex", 
    flexDirection: "column",
    borderWidth: '4px',
    borderColor: 'black',
  },
 
  ParentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '193vh',
    height: '100vh',
    position: 'relative',
  },

  NavBar: {
    display: 'flex',
    flexDirection: 'column', 
    position: 'fixed',
    width: '25vh',
    height: '100vh',
    backgroundColor: '#E5E4E2',
    borderRight: '2px solid white',
    // backgroundColor: 'lightyellow', 
    // borderColor: 'black',
    // borderWidth: '5', 
    // marginRight: '80%'
  },

  scrollviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    overflowY :'auto',
    overflowX:'auto',
    position: 'relative',
    marginTop: '8vh',
    marginBottom: '8vh',
    marginLeft: '33.4vh',
    marginRight: '8.4vh',
    padding:'2vh',
    border: '2px solid blue',
  },

  ScrollView: {
    display: 'flex',
    flexDirection: 'row',

    border: '2px solid red',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },


}