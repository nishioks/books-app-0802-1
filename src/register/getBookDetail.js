const getBookDetail = async (isbn13) => {
    // TODO: Now you are using param - ?isbn= - depending on how to use json-server
    // if you create the backend, you might change the code on how to use the backend.
    // TODO: rename apiUrlBooks bookCollection/v1/books/search{isbn}
    const apiUrlBooks = `http://10.0.3.2:3000/books?isbn13=${isbn13}`;
  
    return fetch(apiUrlBooks, {
      method: 'GET',
    })
      .then(response => response.json())
      .catch((error) => {
        alert(error);
      });
  };
  
  export default getBookDetail;
  