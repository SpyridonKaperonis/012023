import { styles } from '../pages/styles';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function formater(date){
    console.log('Two')
    const dateSplit = date.split(" ");
    console.log('Splitted Date: ', dateSplit)

    const year = dateSplit[3];
    const day = dateSplit[0];
    const dayNum = dateSplit[2];
    const month = dateSplit[1];


    return {
        day: day,
        dayNum: dayNum,
        year: year,
        month: month,
    }
}

export const NavBar = (props) => {
    const original_date = props.date.toString()
    console.log('One')
    const newDate = formater(original_date)
  
    // 9019015914


  return (
    <div style={styles.Container}>
        <div style={styles.dateContainer}>
            <h3 style={styles.dateSpace}>{newDate.dayNum}</h3>
            <h3 style={styles.dateSpace}>{newDate.day}</h3>
            <h3 style={styles.dateSpace}>{newDate.month}</h3>
            <h3 style={styles.dateSpace}>{newDate.year}</h3>
        </div>
        <div style={styles.buttonsContainer}>
            <nav>
        
                <Link to={'/'} style={styles.sideBarButtons}>Intro</Link>

                <Link to={'/about'} style={styles.sideBarButtons}>About</Link>
        
                <Link to={'/resume'} style={styles.sideBarButtons}>Resume</Link>
            
                <Link to={'/projects'} style={styles.sideBarButtons}>Projects</Link>
            
            </nav>
        </div>

        <div style={styles.linkedInGitContainer}>
            <div style={styles.GLIcons}>
                <BsGithub size={'4vh'} onClick={undefined}/>
            </div>
            <div style={styles.GLIcons}>
                <BsLinkedin size={'4vh'} onClick={undefined}/>
            </div>
          
        </div>
    </div>
  );
};




