import HomeDumb from '../../pages/home'
import { connect } from 'react-redux'
import { actionTest } from '../../actions/home'

const mapStateToProps = (state) => {
  return {
    name: state.home.name
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    actionTest: () => dispatch(actionTest())
  }
} 

const homeConfig = connect(mapStateToProps, mapDispathToProps)(HomeDumb)
export default homeConfig