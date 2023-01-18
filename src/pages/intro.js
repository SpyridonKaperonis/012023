import React from 'react'
import { LoadImage } from '../components/loadImage'

import { NameHeadline } from '../components/nameHealine'



export const Intro = () => {
  return (
    <>
      <div style={styles.container}>
      <NameHeadline name={'Spyrion Kaperonis'} />
      <LoadImage 
        style={styles.image}
        source={'/src/images/image14.png'}
        alt_={'Spyridon Kaperonis'}
      />
      </div>
    </>
  )
}


const styles = {

  container: {
    displaye: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: '40px',
    height: '40px',
  }
}