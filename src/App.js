import './App.css';
import  {NavBar} from './components/navBar';
import {styles} from './styles';


function App() {

  const DateTime = new Date();


  return (
    <div style={styles.ParentContainer}>
      <div style={styles.NavBar}>
        <NavBar date={DateTime}/>
      </div>
    </div>
  );
}

export default App;
