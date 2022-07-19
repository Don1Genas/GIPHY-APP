import './App.css';
import {Component} from 'react'

class AppClass extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     giphy: []
  //   }
  // }

state = {
  giphy: []
}

componentDidMount(){
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=a4i3zz0H0yKrquHmUZ9yP6IfsY3RVVtq&limit=25&rating=g')
  .then(res => res.json()) // Parse the request
  .then(json => {
    console.log(json.data);
    this.setState({giphy: json.data}) // Get the data
  })
}

  render(){
  return (
    <div className="App">
      <h1>GIPHY APP</h1>

      {
        this.state.giphy.map(g => (
          <div key={g.id}>
            <img src={g.images.original.url} alt={g.title} />
            <h3>{g.title}</h3>
          </div>
        ))
      }
    </div>
  );
}
}

export default AppClass;
