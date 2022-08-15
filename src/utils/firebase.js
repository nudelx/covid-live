import firebase from 'firebase/app'
import 'firebase/database'
const firebaseConfig = require('./fbConf.json')
const app = firebase.initializeApp(firebaseConfig)

export default app
