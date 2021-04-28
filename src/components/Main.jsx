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
  margin: 12%;
  padding: 5%;
  border: 2px solid orange;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function Main () {
  const [imgURL, setImgURL] = useState('') 
  const [words, setWords] = useState('What happens if you press the button?')

  useEffect(()=> {
    setWords("oh cute! cats!")
    // setWords(catTitles[Math.random() * catTitles.length - 1])
  }, [imgURL])

  const setImage = async () => {
    const {data} = await axiosGetCat()
    setImgURL(data[0]['url'])
  }

  return (
    <React.Fragment>
      <Box>
        <div>
          {words}
        </div>
        <img src={imgURL} style={{maxWidth: '90%', padding: '1em'}}/>
        <Button onClick={() => setImage()}>Cat</Button>
      </Box>
    </React.Fragment>
  )
}

export default Main;
