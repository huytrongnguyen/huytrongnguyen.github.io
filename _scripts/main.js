import 'babel-polyfill'
import Rext from 'ext-react'
import Viewport from './components/viewport'
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume'
import Project from './components/project'

Rext.application({
  selector: 'react-root',
  viewport: Viewport,
  launch: () => {}
})