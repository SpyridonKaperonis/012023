import './App.css';
import  {NavBar} from './components/navBar';
import { ScrollView } from './components/scrollView';
import {styles} from './styles';


function App() {

  const DateTime = new Date();


  return (
    <div style={styles.ParentContainer}>
      <div style={styles.NavBar}>
        <NavBar date={DateTime}/>
      </div>
      <div style={styles.ScrollView}>
        <ScrollView/>
      </div>
    </div>
  );
}

export default App;
