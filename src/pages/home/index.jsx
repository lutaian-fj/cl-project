import React from 'react'
import logo from '../..//logo.svg';
import '../../App.css';
import Button from '../../components/customButton'
class Home extends React.Component {
  render () {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => {this.props.actionTest()}}>
          create-react-app
        </p>
        <Button onClick={() => {console.log('按钮点击啦啦啦')}}/>
      </header>
    </div>
    )
  }
}

export default Home