import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from "./StateProvider";


const spotify = new SpotifyWebApi();
// console.log(spotify)

function App() {

  // const [token, setToken] = useState(null);
  const [ {user, token} , dispatch] = useStateValue();

  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        // console.log(playlists)
      });


      spotify.getPlaylist('37i9dQZEVXcIiwgjvIK2Nh').then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, [])


  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
