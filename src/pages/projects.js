import React from 'react'
import { GithubCard } from '../components/githubCard'


import tree from '../images/treeSplitData.png'
import roadExtraction from '../images/valData_prediction.png'
import hand from '../images/image14.png'

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
              image={hand}
              />
            </div>
        <div style={styles.card}> 
            <GithubCard
              title={'English Proficiency'}
              text={'Description'}
              image={tree}
              />
        </div>
        <div style={styles.card}> 
            <GithubCard
              title={'Satellite Road Extraction'}
              text={'Description'}
              image={roadExtraction}
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
