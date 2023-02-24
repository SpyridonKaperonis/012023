import './App.css';

import React, {useEffect, useState} from 'react';
import  {NavBar} from './components/navBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About } from './pages/about';
import { Resume } from './pages/resume';
import { Projects } from './pages/projects';
import { Footer } from './components/footer';
import { Contact } from './pages/contact';
import { PdfRenderer } from './components/pdfRenderer';


export default function App() {

  const [width, setWindowWidth] = useState(0);


  useEffect( () => {

    updateDimensions();
  
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width);
  }


  const DateTime = new Date();


  return (
    <Router>
      <div style={styles.ParentContainer}>
        <div style={styles.NavBar}>
          <NavBar date={DateTime}/>
        </div>
        <div style={styles.scrollviewContainer}>
            <Routes>
              <Route exact path='/' element={<About/>} />
              <Route path='/resume' element={<Resume/>} />
              <Route path='/projects' element={<Projects/>} />
              {/* <Route path='/contact' element={<Contact/>} /> */}
              {/* <Route path='/resume/SpyridonKaperonis' element={<PdfRenderer/>} /> */}
  
            </Routes>
        </div>
        {/* <div>
        <Footer/>
        </div> */}
      
      </div>

      
    </Router>


  );
}




const styles = {
  Container:{
    

  },
 
  ParentContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'fixed',

  },

  NavBar: {
  
    position: 'fixed',
    width: '170px',
    minWidth: '145px',
    height: '100%',
    // backgroundColor: '#E5E4E2',
    borderRight: '2px solid white',
    zIndex: '1'
    // backgroundColor: 'lightyellow', 
    // borderColor: 'black',
    // borderWidth: '5', 
    // marginRight: '80%'
  },

  scrollviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '94%',
    width: 'auto',
    overflow: 'scroll',
    overflowY :'auto',
    overflowX:'auto',
    // marginTop: '0.5%',
    marginLeft: '180px',
    marginRight: '10px',

    alignItems: 'center',
    // justifyContent: 'center',

    backgroundColor: 'white',

    // border: '2px solid blue',
    // zIndex: '0'
  },

  ScrollView: {
    display: 'flex',
    flexDirection: 'row',

    border: '2px solid red',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },


}