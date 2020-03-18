import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import * as serviceWorker from './serviceWorker';

const ga = ` <script
async
src="https://www.googletagmanager.com/gtag/js?id=UA-131329334-2"
></script>
<script>
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'UA-131329334-2')
</script>`
const div = document.createElement('div')
div.innerHTML = ga
document.querySelector('html').appendChild(div)
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
