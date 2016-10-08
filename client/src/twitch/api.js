const api = {
  log: () => {
  	console.log('hello, api');
  },
  makeRequest: () => {
  	$.ajax({
  	  url: 'http://127.0.0.1:3000/twitch/search',
  	  type: 'GET',
  	  success: (data) => {
  	  	console.log('successful', data);
  	  },
  	  error: (err) => {
  	  	console.log('error, fuck you', err);
  	  }
  	});
  }
}

export default api;