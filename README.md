# twitch-on-vr
An experiment to make an application that can watch Twitch streams in VR.

## Overview
This application will take advantage of two API's, the video embed API and the Twitch API endpoint in order to access the rich Twitch streaming platform. 

[Link to Twitch Official Site](https://www.twitch.tv/)
[Link to Video Embed API](https://dev.twitch.tv/docs/embed-video)
[Link to Twitch API Endpoint](https://github.com/justintv/Twitch-API)

Rendering and virtual reality experience will be achieved through Three.js, a JavaScript library that sits atop WebGL. The application will allow users to find popular channels and watch streams in a simulated big screen environment through their phone in combination with a VR headset. 

## Installation
Webpack is required to compile the application into a bundled js file before running, and may need to be installed globally using `npm install -g webpack`.

Install dependencies with `npm install` and then start server with `npm start`. 

## Architecture
This application is frontend intensive. The client communicates with the backend to serve up the page's assets. The backend is written with Node. 

## Issues and Chalenges

### Limitation of VR
An inherit limitation of web VR in its current state is lack of ability to have many different forms of user input apart from user gaze. This limits the ability to actually customize one's search for videos.

### Rendering Text
It's 2016, and somehow rendering text is apparently still quite difficult for WebGL. Text is rendered as shapes and objects, and therefore too much text on the screen will dramatically slow down application processing. 

### Custom Event System
This application will use a customized event system in order to accomodate user gaze controls. 

### Embedding a Twitch stream into Three.js
It's been done before, but perhaps not to this level of customizability. 
