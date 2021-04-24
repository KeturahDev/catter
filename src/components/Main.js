import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



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


function Main (content) {
 
  let catImage;
  const getCatImage = async () => {
    try {
      let data = await fetch('https://api.thecatapi.com/v1/images/search?size=full')
      console.log("image is: ", data.json()[0]["url"])
    } catch (err) {
      console.log('error: ', err)
    }
  }

  return (
    <React.Fragment>
      <Box>
        <div>
          What happens if you press the button?
        </div>
        <Button onClick={() => getCatImage()}>Cat</Button>
      </Box>
    </React.Fragment>
  )
}

export default Main;
