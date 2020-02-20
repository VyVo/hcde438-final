import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super (props);
    this.state={
      articles:[]
    }
  }
  componentDidMount(){
    fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=fc731e84c3eb443698e2d23138af027e')
    .then ((response) => {
      return response.json();
    }
    )
    .then ((myJson) => {
      this.setState({
        articles: myJson.articles
      });
    });
  }
  render(){
    return (
      <div className='App'>
        {this.state.articles.map((item, index)=> {
          return(
            <div>
              <h2 style ={{textAlign:'left'}}> {item.title} </h2>
              <b> {item.author}</b>
              <img src = {item.urlToImage} style ={{width: '50vw'}}/>
              <a href ='item.url'> Read More </a>
              <p>
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    )
  }
}

export default App;
