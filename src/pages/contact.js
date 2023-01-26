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
  const [firstName, setfirstname] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNum, setPhone] = useState();


  const [onFirstName, setonFirstName] = useState(false);
  const [onLastName, setonLastName] = useState(false);
  const [onEmail, setonEmail] = useState(false);
  const [onPhone, setonPhone] = useState(false);
  const [onSubject, setonSubject] = useState(false);
  const [onContent, setonContent] = useState(false);
  

  const handleFNameChange = event => {
    setfirstname(event.target.value);
  }
  const handleLNameChange = event => {
    setLastName(event.target.value);
  }
  const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  const handlePhoneChange = event => {
    setPhone(event.target.value);
  }



  const changeBorderColorF = (e) => {
    setonFirstName(e);
  }
  const changeBorderColorL = (e) => {
    setonLastName(e);
  }
  const changeBorderColorE = (e) => {
    setonEmail(e);
  }
  const changeBorderColorP = (e) => {
    setonPhone(e);
  }
  const changeBorderColorS = (e) => {
    setonSubject(e);
  }
  const changeBorderColorC = (e) => {
    setonContent(e);
  }




  return (
      <>
      <div style={styles.container}>
        <div style={styles.headLineContainer}>
          <p style={styles.headLine}>Contact Me</p>
        </div>
        <div style={styles.inputsGuide}>
          <form style={styles.inputsContainer} 
          spellCheck={true}
          
          onSubmit={() => handleSubmit()}>
           
            {/* <TextField id='firstName' 
                        label={'First Name'} 
                        required style={styles.inputsStyle}
                        
                        
                        
            /> */}
            <input type='text' 
                    name='FirstName'
                    placeholder='First Name'
                    required={true}
                    value={firstName}
                    onChange={(e) => handleFNameChange(e)}
                    style={{...styles.inputsStyle, border: onFirstName ? '1px solid black': '1px solid #E5E4E2'}}
                    onMouseEnter={() => changeBorderColorF(true)}
                    onMouseOut={() => changeBorderColorF(false)}
                    onFocus={''}
                
            />

            
            <input type='text' 
                    name='LastName'
                    placeholder='Last Name'
                    required={true}
                    value={LastName} 
                    onChange={(e) => handleLNameChange(e)}
                    style={{...styles.inputsStyle, border: onLastName ? '1px solid black': '1px solid #E5E4E2'}}
                    onMouseEnter={() => changeBorderColorL(true)}
                    onMouseOut={() => changeBorderColorL(false)}
            />
         
          
            <input type='email' 
                    name='Email'
                    placeholder='Email'
                    required={true}
                    value={Email} 
                    onChange={(e) => handleEmailChange(e)}
                    style={{...styles.inputsStyle, border: onEmail ? '1px solid black': '1px solid #E5E4E2'}}
                    onMouseEnter={() => changeBorderColorE(true)}
                    onMouseOut={() => changeBorderColorE(false)}

            />
         
       
            <input type='tel'
                    name='Phone' 
                    placeholder='Phone Number'
                    value={PhoneNum} 
                    onChange={(e) => handlePhoneChange(e)}
                    style={{...styles.inputsStyle, border: onPhone ? '1px solid black': '1px solid #E5E4E2'}}
                    onMouseEnter={() => changeBorderColorP(true)}
                    onMouseOut={() => changeBorderColorP(false)}
            />
          
      
            <input type='text' 
                    name='Subject'
                    placeholder='Subject'
                    value={undefined} 
                    onChange={undefined}
                    style={{...styles.inputsStyle, border: onSubject ? '1px solid black': '1px solid #E5E4E2'}}
                    onMouseEnter={() => changeBorderColorS(true)}
                    onMouseOut={() => changeBorderColorS(false)}
            />
       
           
            <textarea
                    name='Content'
                    placeholder={'Write in 250 characters.'}
                    required={true}
                    rows={5}
                    cols={50}
                    maxLength={250}
                    value={undefined} 
                    onChange={undefined}
                    style={{...styles.inputTextareaStyle, border: onContent ? '1px solid black': '1px solid #E5E4E2'}}
                    onMouseEnter={() => changeBorderColorC(true)}
                    onMouseOut={() => changeBorderColorC(false)}
            />
          
            <input style={styles.submitButton} type={'submit'} value='Send' />
          </form>
          <div style={{position: 'absolute', height:'5vh',width: '4vh'}}>

          </div>

          </div>
        </div>
      </>
    )
}

const styles = {
  container:{ 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%'
  },

  inputsGuide: {
    alignSelf: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },

  inputsContainer:{
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    maxWidth: '800px',
    width: '50%',
    padding: '5vh'
  },

  inputsStyle: {
    height: '5vh',  
    outline: 'none',
    fontSize: '20px',
  },

  inputTextareaStyle: {
    height: '9vh',
    width: '98.4%',
    outline: 'none',
    fontSize: '20px',
    resize: 'vertical'
  },

  labelsStyle: {
    fontSize: '2vh',
  },

  headLineContainer: {
    border: '1px solid black',
    marginLeft: '5vh',
    marginTop: '10vh',
  },

  headLine: {
    fontSize: '4vh',
    fontWeight: 'bold'
  },

  submitButton: {
    marginTop: '10px',
    height: '5vh',
    minWidth: '200px',
    
    backgroundColor: '#E5E4E2',
    fontSize: '20px',
    outline: 'none',
    cursor: 'pointer',

    
  }


}
