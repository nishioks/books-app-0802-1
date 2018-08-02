const postRegisterBook = async (postBookData) => {
    const apiUrlBooks = 'http://10.0.3.2:3000/books';
    
    fetch(apiUrlBooks, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBookData)
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  }
  
  export default postRegisterBook;
  