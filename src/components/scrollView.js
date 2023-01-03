import React from 'react'
import { GithubCard } from './githubCard'
import { styles } from '../styles'

export const ScrollView = () => {
  return (

    // The first div is the Wrapper
    <>
    <div style={styles.card}>
        <GithubCard title={'Hello world'} text={'This is your opportunity'}/>
        <GithubCard/>
        <GithubCard/>
    </div>
    <div style={styles.card}>
      <GithubCard title={'Hello world'} text={'This is your opportunity'}/>
      <GithubCard/>
      <GithubCard/>
    </div>
</>
  )
}


