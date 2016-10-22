import api from './twitch/api';
import player from './twitch/player';
import scene from './rendering/scene';

console.log('main is working');
api.log();
api.featuredRequest();
// player.stream();

scene.init(false);