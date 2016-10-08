#Twitch on VR Findings Log
This document presents documentation for various findings throughout the develop process for this application

#### Twitch Developer
Application had to be registered for a client ID with Twitch in order to make API requests. 

[Twitch Developer Authentication](https://github.com/justintv/Twitch-API/blob/master/authentication.md)

This leads to another issue, which requires that the client secret key be gitignored and kept... well... a secret. :D

A quick solution for this is to include the client id on an environment variable in the server side of the client app that will make the API requests to Twitch. The client will make a request to the server, the server will make a request to Twitch API, receive and process the response, and then send it back to the client. 

This actually may help client side performance as well, as the server can pre-filter through the received data and only send what is relevant, therefore removing the need for the front-end to have to do so and spare resources for the intensive rendering to be done by WebGL. 