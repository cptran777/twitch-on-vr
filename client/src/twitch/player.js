module.exports = {
  stream: () => {
  	let options = {
  	  width: 864,
  	  height: 480,
  	  channel: 'Smitten'
  	};

  	let player = new Twitch.Player('app', options);
  	player.setVolume(0.5);
  }
};

