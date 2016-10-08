import api from './twitch/api';
import player from './twitch/player';

console.log('main is working');
api.log();
api.makeRequest();
player.stream();