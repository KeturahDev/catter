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
      let response = await fetch(`https://api.thecatapi.com/v1/images?${process.env.API_KEY}`, {
        method: 'GET'
      })
      console.log("response : ", response[0])
      console.log("redstate: ", response.readyState)
      if ( response.readyState == 4 && response.status == 200) {
        console.log('responseText:' + response.responseText);
      }

      // const data = response
      // console.log("image is: ", data.responseText)

      //   const xmlhttp = new XMLHttpRequest();
      //   xmlhttp.onreadystatechange = function() {
      //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //       console.log('responseText:' + xmlhttp.responseText);
      //       try {
      //         const data = JSON.parse(xmlhttp.responseText);
      //         console.log(data)
      //       } catch (err) {
      //         console.log(err.message + " in " + xmlhttp.responseText);
      //         return;
      //       }
      //       // callback(data);
      //     }
      //   };
      //   xmlhttp.open("GET", 'https://api.thecatapi.com/v1/images/search?size=full', true);
      //   xmlhttp.send();

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
