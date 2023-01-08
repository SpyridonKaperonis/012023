import React, { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'


export const GitHubLinkedInBtn = () => {

    let [over, setOver] = useState(false);

    if(over){
        styles.GLIcons.backgroundColor='white';
        console.log('OVER')
    }
    else {
        styles.GLIcons.backgroundColor='';
        console.log('OUT')
    }

    // const handleMouseOver = () => {setOver(true)}



  return (
    <div>
        <div style={styles.GLIcons}>
            <BsGithub size={'4vh'} onClick={undefined}/>
        </div>
        <div style={styles.GLIcons}>
            <BsLinkedin size={'4vh'} onClick={undefined}/>
        </div>
    </div>
  )
};


const styles = {
    GLIcons: {
        margin: '2vh', 
        padding: '2vh',
        border: '1px solid black',
        borderRadius: '2vh', 
        backgroundColor: '',
    },
}