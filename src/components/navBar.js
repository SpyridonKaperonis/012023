// import { styles } from '../pages/styles';
import { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom';
import { GitHubLinkedInBtn } from './gitHubLinkedInBtn';

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
  
    // let [over, setOver] = useState(false);

    // if(over){
    //     styles.GLIcons.backgroundColor='red';
    //     console.log('OVER')
    // }
    // else {
    //     styles.GLIcons.backgroundColor='';
    //     console.log('OUT')
    // }


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
               
                <Link 
                    to={'/'}
                    style={useLocation().pathname==='/' ? styles.sideBarButtonClicked : styles.sideBarButton}>Intro</Link>

                <Link 
                    to={'/about'}  
                    style={useLocation().pathname==='/about' ? styles.sideBarButtonClicked : styles.sideBarButton}>About</Link>
        
                <Link 
                    to={'/resume'} 
                    style={useLocation().pathname==='/resume' ? styles.sideBarButtonClicked : styles.sideBarButton}>Resume</Link>
            
                <Link 
                    to={'/projects'} 
                    style={useLocation().pathname==='/projects' ? styles.sideBarButtonClicked : styles.sideBarButton}>Projects</Link>
            
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

const styles = {
    Container: {
        display: "flex", 
        flexDirection: "column",
        borderWidth: '4px',
        borderColor: 'black',
    
    },

    dateContainer:{
        display: 'flex',
        flexDirection: 'row',
   
        justifyContent: 'center',
        margin: '1vh',
        fontSize: '2vh',
        backgroundColor: '#E5E4E2',
    },

    dateSpace: {
    padding: '3px'
    },   

    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5vh'
    },

    sideBarButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '3vh',
        marginTop: '1.5vh',
        backgroundColor: '#E5E4E2',
        fontWeight: 'bold',
        fontSize: '3vh',
        color: 'black',
        textDecoration: 'none'
    },

    sideBarButtonClicked: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '3vh',
        marginTop: '1.5vh',
        backgroundColor: 'white',
        fontWeight: 'bold',
        fontSize: '3vh',
        color: 'black',
        textDecoration: 'none'
    },

    linkedInGitContainer: {
        display: 'flex',
        marginTop: '28vh',
        justifyContent: 'center',
        alignItems: 'center',
    },

    GLIcons: {
        margin: '2vh', 
        padding: '2vh',
        border: '1px solid black',
        borderRadius: '2vh', 
        backgroundColor: '',
    },

}


