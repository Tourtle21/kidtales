import React from 'react';

const BookPage = ({ content }) => {
  return content.map((paragraph, index) => {
    return (
      <p key={index}>{paragraph}</p>
    )
  })
}

export default BookPage;
