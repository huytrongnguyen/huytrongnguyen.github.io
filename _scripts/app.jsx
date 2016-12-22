/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Routes from './components/routes'

global.jQuery = require('jquery')
global.Tether = require('tether')

render(<Routes />, document.getElementById('react-root'))