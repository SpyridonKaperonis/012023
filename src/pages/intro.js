import React from 'react'
import { LoadImage } from '../components/loadImage'

import { NameHeadline } from '../components/nameHealine'



export const Intro = () => {
  return (
    <>
      <NameHeadline name={'Spyrion Kaperonis'} />
      <LoadImage 
        style={styles.image}
        source={'./images/skimage.jpg'} 
        alt_={'Spyridon Kaperonis'}
      />
    </>
  )
}


const styles = {
  image:{
    width: '10vh',
    height: '10vh',
  }
}