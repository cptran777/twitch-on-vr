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

  console.log('test client id:', process.env.TWITCH_CLIENTID);

  request(options, (err, apiRes, body) => {
  	if (err) {
  	  res.send(err);
  	} else {
  	  console.log('twitch api success: ', body);
  	  res.send(body);
  	}
  });

};

module.exports = {
  TwitchSearch
}