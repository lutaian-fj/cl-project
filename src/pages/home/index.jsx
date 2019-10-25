import React from 'react'
import logo from '../..//logo.svg';
import '../../App.css';
class Home extends React.Component {
  render () {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          开启create-react-app学习之旅.
        </p>
      </header>
    </div>
    )
  }
}
export default Home