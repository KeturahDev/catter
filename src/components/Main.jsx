import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {axiosGetCat} from '../services/getCatImage';
import catTitles from '../content/CatTitles';

const Button = styled.button `
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em 1em;
  padding: 0.25em 1em;
`
const Box = styled.div `
  display: flex;
  padding: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    img {
      max-height: 250px
    }
  }

  
`

function Main () {
  const [imgURL, setImgURL] = useState('') 
  const [words, setWords] = useState('What happens if you press the button?')

  useEffect(()=> {
    if (imgURL) {
      setWords(catTitles[Math.floor(Math.random() * 10)])
    }
  }, [imgURL])

  const setImage = async () => {
    const {data} = await axiosGetCat()
    setImgURL(data[0]['url'])
  }

  return (
    <Box>
      <div>
        {words}
      </div>
      <img src={imgURL} style={{maxWidth: '80%', padding: '1em'}}/>
      <Button onClick={() => setImage()}>Cat</Button>
    </Box>
  )
}

export default Main;
