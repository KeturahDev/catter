const getCatImage = async (callback) => {
  try {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        let data
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          console.log('responseText:' + xmlhttp.responseText);
          try {
            data = JSON.parse(xmlhttp.responseText);
            console.log('parsed response text', data)
            console.log('What even is our callback?', callback)
            callback(data)
          } catch (err) {
            console.log(err.message + " in " + xmlhttp.responseText);
            return;
          }
          // callback(data)
        }
      };
      // try{
        xmlhttp.open("GET", 'https://api.thecatapi.com/v1/images/search?size=full', true);
        xmlhttp.send();
        console.log("sent!", )
      // } catch (err) {
        // alert(`error: ${err}`)
      // }

  } catch (err) {
    console.log('error: ', err)
  }
}

export default getCatImage;