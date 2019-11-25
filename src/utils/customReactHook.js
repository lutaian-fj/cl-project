let state = []
let setters = []
let firstRun = true
let cursor = 0
function createSetter(cursor) {
  return function setStateWithCursor(newVal) {
    state[cursor] = newVal
  }
}

export function useState(initVal) {
  if (firstRun) {
    state.push(initVal)
    setters.push(createSetter(cursor))
    firstRun = false
  }
  const value = state[cursor]
  const setter = setters[cursor]
  cursor++
  return [value, setter]
}