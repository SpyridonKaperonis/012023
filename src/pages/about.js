import React from 'react'
import { ParagraphAbout } from '../components/paragraphAbout'


import { LoadProfileImage } from '../components/loadImage'

import { NameHeadline } from '../components/nameHealine'

export const About = () => {

  const aboutParagraphs = {
    
    one: 'Hello, I am Spyridon. I was born and raised in Patras, Greece. Patras is located on the northern coast of the Peloponnese peninsula and is the third largest city in Greece. It is an idyllic place to call home and provided me with many opportunities to explore my interests and pursue my passions.',
    two: 'In 2011, not everyone in Greece owned a personal laptop. During this time, I was in Highschool, and the government provided every student with a small laptop as an introductory gesture to technology for our generation. Using this device, I was able to write my first program in Python, which happened to be a simple calculator. It was a defining moment for me as I discovered the vast possibilities technology offered, and how it could be harnessed to develop tools that could positively impact humanity. This experience sparked my interest in technology and set me on the path to appreciating its potential to change the world.',
    // three: 'Using this device, I was able to write my first program in Python, which happened to be a simple calculator. It was a defining moment for me as I discovered the vast possibilities technology offered, and how it could be harnessed to develop tools that could positively impact humanity. This experience sparked my interest in technology and set me on the path to appreciating its potential to change the world.',
    four:'While in high school, I pursued tennis and competed in tennis tournaments in Greece. This along with my academic standing paved the way for me to become a student athlete playing tennis in the United States, where I majored in Computer Science.',
    five:'I always had an earnest interest in Artificial Intelligence. Since the early Stone Age, humans have been crafting tools, and as our brains have evolved, so have our tools, with significant improvements after the industrial revolution. In my opinion, Artificial Intelligence represents the next tool that will aid humans in achieving more within their lifetimes, enhancing their health, work environments, and overall quality of life. ',
    six:'Inspired by those ideas and beliefs, in September 2022, I started my Master of Science program at Stevens Institute of Technology in Applied Artificial Intelligence. Currently, I am progressing through my second semester, having acquired a vast array of concepts and algorithms during the first semester. This semester my current focus lies on Computer Vision and GPU programming.',
    seven:'Apart from my professional pursuits, I prioritize maintaining a healthy and active lifestyle, which includes regular exercise. I find that physical activity not only helps me stay fit but also keeps me mentally alert and focused.',
    eight:'I also enjoy reading books as a means of gaining new perspectives and knowledge. I find it incredibly satisfying to immerse myself in a book and learn something new with each turn of the page. In fact, I often consider books as a source of fuel or energy to recharge my batteries and inspire new ideas.',
    nine:'Overall, these hobbies and interests not only help me maintain a balanced lifestyle, but also contribute to my personal growth and development as an individual.',
    ten:'Thank you for taking the time to learn more about me. If our paths cross in the future, I look forward to meeting you and getting to know you better.'
  }


  return (

  
    <div style={styles.container_}>
      <div style={styles.container}>
        
        <LoadProfileImage style={styles.image} div_style={{alignItems:'center'}} alt='Spyridon Kaperonis'/>
        <NameHeadline name={'Spyridon Kaperonis'} />
        </div>
        <div style={styles.textContainer}>
          <ParagraphAbout text={aboutParagraphs.one}/>
        
          <ParagraphAbout text={aboutParagraphs.two}/>
          
          {/* <ParagraphAbout text={aboutParagraphs.three}/> */}

          <ParagraphAbout text={aboutParagraphs.four}/>

          <ParagraphAbout text={aboutParagraphs.five}/>

          <ParagraphAbout text={aboutParagraphs.six}/>

          <ParagraphAbout text={aboutParagraphs.seven}/>

          <ParagraphAbout text={aboutParagraphs.eight}/>

          <ParagraphAbout text={aboutParagraphs.nine}/>

          <ParagraphAbout text={aboutParagraphs.ten}/>
          
        </div>
    
    </div>
  )
}

const styles = {
  container_:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },

  textContainer:{
    marginLeft: '100px',
    marginRight: '100px', 
    marginBottom: '100px',
  },

  image:{
    width: '300px',
    height: 'auto',
    borderRadius: '200px',
  },

}