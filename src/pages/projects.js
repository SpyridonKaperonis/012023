import React from 'react'
import { GithubCard } from '../components/githubCard'
import { styles } from '../pages/styles'


export const Projects = () => {
  return (
    <>
    <div style={styles.cardsContainer}>
      <div style={styles.card}>
          <GithubCard 
            title={'Hello world'} 
            text={'This is your opportunity'}
            image={'https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg'}
            />
          </div>
      <div style={styles.card}> 
          <GithubCard/>
      </div>
      <div style={styles.card}> 
          <GithubCard/>
      </div>
    </div>
    <div style={styles.card}> 
        <GithubCard/>
    </div>
    </>
  )
}
