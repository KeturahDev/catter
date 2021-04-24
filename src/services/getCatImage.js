import axios from 'axios'

export const axiosGetCat = async () => {
  try {
    const response = await axios(
      {
        method: 'get',
        url: 'https://api.thecatapi.com/v1/images/search?size=full',
        json: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error)
  }
}

const getCatImage = async (callback) => {
  try {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          const data = JSON.parse(xmlhttp.responseText);
          console.log('parsed response text', data)
          if (callback && typeof(callback) === "function") {
            callback(data);
          }
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
      }
    };

    xmlhttp.open("GET", 'https://api.thecatapi.com/v1/images/search?size=full', true);
    xmlhttp.send();

  } catch (err) {
    console.log('error: ', err)
  }
}

export default getCatImage;