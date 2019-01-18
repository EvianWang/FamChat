import firebaseService from './config'
import authStore from './auth.js'
import MessageStore from './message.js'
//import MessagesListStore from './messagesList.js'

const config = new firebaseService();
const auth = new authStore();
const message = new MessageStore();
//const messages = new MessagesListStore();

export default { config, auth, message }