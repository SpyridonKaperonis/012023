import React from 'react'

export const SmallScreenNavBar = () => {
  return (
    <div style={styles.container}>
        <div style={styles.comp1}>
            <p>Dot</p>
        </div>
        <div style={styles.comp2}>
            <p>GitLin</p>
        </div>
        
    </div>
  )
}


const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        height: '100%',
        width: '50px',
        zIndex: '2',
        backgroundColor: 'lightblue',
        justifyContent: 'space-between'
    },

    comp1:{

    }
}