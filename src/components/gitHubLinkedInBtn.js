import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export const GitHubLinkedInBtn = () => {

    const [GisOn, setGIsOn] = useState(false);
    const [LisOn, setLIsOn] = useState(false);
    const navigate = useNavigate();

    const navigateToGitHub = () => {
        window.open('https://www.github.com')
    }
    const navigateToLinkedIn = () => {
        window.open('https://www.linkedin.com')
    }

    
  return (
    <>
       
        <BsGithub size={'4vh'} style={{...styles.GIcon, backgroundColor: GisOn ? 'white' : ''}} onClick={ () => navigateToGitHub()}
        onMouseOver={() => setGIsOn(true)} onMouseOut={() => setGIsOn(false)}
        
        
        />
        
      
        <BsLinkedin size={'4vh'} style={{...styles.LIcon, backgroundColor: LisOn ? 'white' : ''}} onClick={() => navigateToLinkedIn()}
        onMouseOver={() => setLIsOn(true)} onMouseOut={() => setLIsOn(false)}
        />

    </>
  )
};


const styles = {
    GIcon: {
        padding: '3.4vh',
        cursor: 'pointer'
      
    },
    LIcon: {
        padding: '3.4vh',
        cursor: 'pointer'
  
    },
}