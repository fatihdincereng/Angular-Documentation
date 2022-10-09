function comments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => console.log(json))
  }

  function photos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => console.log(json))
  }


  function callbackmetod(callback){
    this.photos();
    callback();
  }

  function callback(){
    this.callbackmetod(this.comments);
  }


  