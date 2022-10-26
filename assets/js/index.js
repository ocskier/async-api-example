const picContEl = document.querySelector('#pic-container');

const getDogPics = (breed) => {
  // Empty the pic container
  picContEl.innerHTML = '';

  //Call the API with the specific breed
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/100`)
    .then((response) => {
      if (response.status < 400) {
        // Parse JSON from body of response if successful
        return response.json();
      }
      throw new Error('No breed data Available!');
    })
    .then((data) => {
      // Create an image element for all breed pics
      for (var index = 0; index < data.message.length; index++) {
        var picUrl = data.message[index];

        var newPetImgEl = document.createElement('img');
        newPetImgEl.style.height = '300px';
        newPetImgEl.style.width = '400px';
        newPetImgEl.src = picUrl;

        var newPicDivEl = document.createElement('div');
        newPicDivEl.setAttribute('class', 'pet-pic');
        newPicDivEl.append(newPetImgEl);
        picContEl.append(newPicDivEl);
      }
      console.log('Printed all pics to DOM')
    })
    .catch((error) => {
      // Alert the user for any network issues
      console.log(error);
    });
}

getDogPics('mastiff');
console.log('Logging after async call!')