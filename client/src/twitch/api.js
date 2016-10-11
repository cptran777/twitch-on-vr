// Contains the functions related to making server calls to activate the twitch api

const api = {
  log: () => {
  	console.log('hello, api');
  },
  featuredRequest: () => {
  	$.ajax({
  	  url: 'http://127.0.0.1:3000/twitch/featured',
  	  type: 'GET',
  	  success: (data) => {
  	  	console.log('successful', data);
  	  },
  	  error: (err) => {
  	  	console.log('you suck, error: ', err);
  	  }
  	});
  }
}

export default api;