import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './Pages/Main'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  )
}

export default App
