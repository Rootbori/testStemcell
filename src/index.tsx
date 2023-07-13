import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/index.scss'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
        <App name="Your Name"/>
    </React.StrictMode>,
    rootElement
)

