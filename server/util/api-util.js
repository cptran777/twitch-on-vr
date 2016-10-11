// Functions that operate on data received from Twitch API

let request = require('request');

const TwitchSearch = (req, res) => {
  
  let options = {
  	uri: 'https://api.twitch.tv/kraken/search/streams',
  	qs: {
  	  client_id: process.env.TWITCH_CLIENTID,
  	  query: 'smite',
  	  limit: 5
  	}
  }

  request(options, (err, apiRes, body) => {
  	if (err) {
  	  res.send(err);
  	} else {
  	  console.log('twitch api success: ', body);
  	  res.send(body);
  	}
  });

};

/*
* To get channel from Twitch response:
* parsedBody.featured 	// Gets an array of featured stream objects
* 	[idx] 				// Chooses one of those stream objects
*	.stream 			// Gets the object with stream information
*	.channel			// Gets the object with information on the channel
*						// Side note: .preview { small: 'imglink', medium: 'imglink' } gets thumbnails
*	.name				// Gets the string of the channel name
*						// Side note: .url will get a link to that channel
*/

const TwitchFeatured = (req, res) => {

  let options = {
  	uri: 'https://api.twitch.tv/kraken/streams/featured',
  	qs: { 
  	  limit: '5', 
  	  client_id: process.env.TWITCH_CLIENTID
  	}
  }

  request(options, (err, apiRes, body) => {
  	if (err) {
  	  console.log('error: ', err);
  	} else {
  	  // Parse body:
  	  let parsedBody = JSON.parse(body);
  	  console.log('response: ', parsedBody.featured[2].stream.channel.name);
  	  // console.log('twitch api success: ', body);
  	}
  });

};

module.exports = {
  TwitchSearch,
  TwitchFeatured
}