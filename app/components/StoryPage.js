import React from 'react';

export default function StoryPage(props) {
  const changePageNumber = () => {
    props.changePageNumber(props.nextPage)
  }
  const renderNextPageButton = () => {
    if (props.pageNumber > 0 && props.pageNumber < 9) {
      return (
        <div style={styles.button}>
          <div></div>
          <button onClick={changePageNumber}>Flip Page</button>
          <div>{props.pageNumber}</div>
        </div>
      )
    }
  }
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <h1>{props.text}</h1>
      </div>
      <div style={styles.imageStyle}>
        <img
          src={props.imageUrl}
          alt="Dragons"
        />
      </div>
      {renderNextPageButton()}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    height: '100%'
  },
  text: {
    paddingBottom: '20px',
    width: '100%',
    textAlign: 'left',
    paddingLeft: '20px'
  },
  imageStyle: {
    height: '90%',
    width: '90%'
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  }
}
