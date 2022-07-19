import './App.css';
import {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import GiphyList from './components/GiphyList';
import About from './components/pages/About';

const App = () => {
    // Sets up our App state
    const [giphys, setGiphys] =useState(null)

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/search?api_key=a4i3zz0H0yKrquHmUZ9yP6IfsY3RVVtq&q=land+and+air&limit=25&offset=0&rating=g&lang=en')
        .then((res) => res.json())
        .then(json => setGiphys(json.data))
    }, [])

    return (
        <div className="App">
            <h1>GIPHY APP</h1>

        <Switch>
            <Route path='/About'>
                <About />
            </Route>

            <Route  path="/">
                {giphys && <GiphyList giphys={giphys} msg='GIPHYS COMPONENT' />}
            </Route>
        </Switch>
            
            
        </div>
    )
};

export default App;