import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyCWcDIa5FHu9DGw0kFM9UKiBmDcL26aFBA",
    authDomain: "famchat-9cdd5.firebaseapp.com",
    databaseURL: "https://famchat-9cdd5.firebaseio.com",
    projectId: "famchat-9cdd5",
    storageBucket: "famchat-9cdd5.appspot.com",
    messagingSenderId: "148890661498"
}

export default class firebaseService {
	constructor() {
		firebase.initializeApp(config);
	}
}