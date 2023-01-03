import React from 'react'
import { styles } from '../styles';

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
  


  return (
    <>
        <div style={styles.dateContainer}>
            <h3 style={styles.dateSpace}>{newDate.dayNum}</h3>
            <h3 style={styles.dateSpace}>{newDate.day}</h3>
            <h3 style={styles.dateSpace}>{newDate.month}</h3>
            <h3 style={styles.dateSpace}>{newDate.year}</h3>
        </div>
        <a href='' style={styles.sideBarButtons}>Home</a>
        <a href='' style={styles.sideBarButtons}>Resume</a>
        <a href='' style={styles.sideBarButtons}>Personal Interests</a>
        <div>
            <a>LinkedIn</a>
            <a>GitHub</a>
        </div>
    </>
  );
};
