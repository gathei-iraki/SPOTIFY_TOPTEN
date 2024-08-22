//THIS FILE IS FOR REFRESHING TOKEN EACH TIME TOKEN EXPIRES

import querystring from 'querystring'

//look for client_id, client_secret, and refresh_token from the .env.local file,
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

//Convert the buffer string client_id:client_secret into base64 
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

//Perform a POST request to the TOKEN_ENDPOINT
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    //Attach the Authorization and Content-Type headers to the request
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    //Use the refresh_token as a grant_type on the URL query string
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
//If succeeded, it will return an access token as a JSON response.

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}