import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline'
import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import Definition from './components/Definition'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>{' '}
        <Route path="/search/:word">
          <Definition />
        </Route>
      </Router>
    </ThemeProvider>
  )
}

export default App
