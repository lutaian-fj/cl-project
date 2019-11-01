const initState = {
  name: 'kobe'
}
const home = (state = initState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        name: 'lta'
      }
  
    default:
      return state
  }
}

export default home