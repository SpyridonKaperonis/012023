import { TextField } from '@mui/material';
import React, { useState, useRef } from 'react'


function getWindowDimensions() {
  const { innerWidth, innerHeight } = window;
  return(
    innerWidth, innerHeight
  )
}

function handleSubmit(){
  return true
}




export const Contact = () => {
  const [firstName, setfirstname] = useState('First Name');
  const [onFirstName, setonFirstName] = useState(false);

  

  const handleChange = event => {
    setfirstname({event});
  }

  const changeBorderColor = (e) => {
    setonFirstName(e);
  }

  return (
      <>
      <div style={styles.container}>
        <div style={styles.headLineContainer}>
          <p style={styles.headLine}>Contact Me</p>
        </div>
        <div style={styles.inputsGuide}>
          <form style={styles.inputsContainer} onSubmit={() => handleSubmit()}>
           
            <TextField id='firstName' 
                        label={'First Name'} 
                        required style={styles.inputsStyle}
                        
                        
                        
            />
            <input type='text' 
                    name='FirstName'
                    placeholder='First Name'
                    onChange={(e) => handleChange(e)}
                    style={{...styles.inputsStyle, border: onFirstName ? '1px solid blue': ''}}
                    onMouseEnter={() => changeBorderColor(true)}
                    onMouseOut={() => changeBorderColor(false)}
                
            />

            
            <input type='text' 
                    name='LastName'
                    placeholder='Last Name'
                    value={undefined} 
                    onChange={undefined}
                    style={styles.inputsStyle}
            />
         
          
            <input type='email' 
                    name='Email'
                    placeholder='Email'
                    value={undefined} 
                    onChange={undefined}
                    style={styles.inputsStyle}
            />
         
       
            <input type='text'
                    name='Phone' 
                    placeholder='Phone Number'
                    value={undefined} 
                    onChange={undefined}
                    style={styles.inputsStyle}
            />
          
      
            <input type='text' 
                    name='Subject'
                    placeholder='Subject'
                    value={undefined} 
                    onChange={undefined}
                    style={styles.inputsStyle}
            />
       
           
            <input type='textarea' 
                    name='Content'
                    placeholder='Content'
                    value={undefined} 
                    onChange={undefined}
                    // style={styles.inputsStyle}
            />
          
            <input type={'submit'} value='Submit' />
          </form>

          </div>
        </div>
      </>
    )
}

const styles = {
  container:{ 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputsGuide: {
    marginRight: '5vh'
  },

  inputsContainer:{
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    padding: '5vh'
  },

  inputsStyle: {
    
    margin: '1vh',
    fontSize: '3vh',
    border: '0px',
  },

  labelsStyle: {
    fontSize: '3vh',
  },

  headLineContainer: {
    border: '1px solid black',
    marginLeft: '5vh'
  },

  headLine: {
    fontSize: '3vh',
    fontWeight: 'bold'
  },

  


}
