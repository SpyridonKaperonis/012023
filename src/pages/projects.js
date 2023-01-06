import React from 'react'
import { GithubCard } from '../components/githubCard'


export const Projects = () => {
  return (
    <>
    <div>
      <div>
        <h2>Most Recent</h2>
      </div>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
            <GithubCard 
              title={'Sign Language Recognition'} 
              text={'This is your opportunity'}
              image={'https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg'}
              />
            </div>
        <div style={styles.card}> 
            <GithubCard
              title={'English Proficiency'}
              text={'Description'}
              />
        </div>
        <div style={styles.card}> 
            <GithubCard
              title={'Satellite Road Extraction'}
              text={'Description'}
              />
        </div>
      </div>
      <div style={styles.card}> 
          <GithubCard
            title={'Textbook Service System'}
            text={'Description'}/>
      </div>
      <div style={styles.card}>
        <GithubCard
          title={'tennis Social Network'}
          text={'Description'}
          />
      </div>
    </div>
    </>
  )
}

const styles = {
  cardsContainer:{
    display: 'flex', 
    flexDirection: 'row', 
  }, 

  card:{
    display: 'flex', 
    flexDirection: 'column', 
    margin: '3vh',
    border:'2px solid red',
    borderRadius: '2vh',
  }, 


}
