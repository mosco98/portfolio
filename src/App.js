import React from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Main from './Pages/Main'
import Projects from './Pages/Projects'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog" component={Blog} />
    </Switch>
  )
}

export default App
