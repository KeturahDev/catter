import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getCatImage from '../services/getCatImage'



const Button = styled.button `
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em 1em;
  padding: 0.25em 1em;
`
const Box = styled.div `
  diplay: flex;
  margin: 20%;
  padding: 5%;
  border: 2px solid orange;
`


function Main () {
 
  const [imgURL, setImgURL ] = useState('') 
  const setImage = (response) => {
    console.log("callback entered")
    try{
      console.log("returned from getCatImage: ", response[0]['url'])
      setImgURL(response[0]['url']);
    } catch (err) {
      console.log("err", err)
    }
  }
  return (
    <React.Fragment>
      <Box>
        <div>
          What happens if you press the button?
        </div>
        <img src={imgURL} />
        
        <Button onClick={() => getCatImage(setImage)}>Cat</Button>
      </Box>
    </React.Fragment>
  )
}

export default Main;
