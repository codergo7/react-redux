function createStore(reducer, preloadedState) {
    let state = preloadedState
    const listeners = []
  
    function getState() {
      return state
    }
  
    function subscribe(listener) {
      listeners.push(listener)
      return function unsubscribe() {
        const index = listeners.indexOf(listener)
        listeners.splice(index, 1)
      }
    }
  
    function dispatch(action) {
      state = reducer(state, action)
      listeners.forEach(listener => listener())
    }
  
    dispatch({ type: '@@redux/INIT' })
  
    return { dispatch, subscribe, getState }
  }

  /**
   * The store has the current state value and reducer function inside of itself
getState returns the current state value
subscribe keeps an array of listener callbacks and returns a function to remove the new callback
dispatch calls the reducer, saves the state, and runs the listeners
The store dispatches one action on startup to initialize the reducers with their state
The store API is an object with {dispatch, subscribe, getState} inside
To emphasize one of those in particular: notice that getState just returns whatever the current state value is.
 That means that by default, nothing prevents you from accidentally mutating the current state value! 
 This code will run without any errors, but it's incorrect:
   */