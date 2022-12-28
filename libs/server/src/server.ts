/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(express.json());

const scopes = ['user-read-private', 'user-read-email'];
const clientId = 'e70060fc85724745bb5ff480a6ad6fe0';
const clientSecret = '610af7037745424b835e655a1a4cdae3';
const redirectUri = 'https://example.com/callback'; //'http://localhost:4200';

app.post('/login', (request: any, resolution: any) => {
  const code = request.body.code;

  const spotifyClient = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: redirectUri,
  });

  // const authorizeURL = spotifyClient.createAuthorizeURL(scopes);
  // console.log(authorizeURL);

  // Retrieve an access token and a refresh token
  spotifyClient
    .authorizationCodeGrant(code)
    .then((data: any) => {
      resolution.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((error: any) => {
      console.log(error);
      resolution.sendStatus(400);
    });
});

app.listen(3001);

//nodemon pathToFile.js

// export function server(): string {
//   return 'server';
// }
