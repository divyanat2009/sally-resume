import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Section from './Components/Section';
import Contact from './Components/Contact';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Section></Section>
        <Contact></Contact>
      </div>
    )
  }
}
export default App;
