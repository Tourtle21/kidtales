import React from 'react';

export default function StoryPage(props) {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <h1>{props.text}</h1>
      </div>
      <div styles={styles.image}>
        <img
          src={props.imageUrl}
          alt="Dragons"
        />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  text: {
    height: '10%'
  },
  image: {
    height: '90%',
    width: '90%'
  }
}
