import { action } from "mobx";
import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

export default class MessagesListStore extends MobxFirebaseStore {
	constructor(){
		super(firebase.database().ref());
		firebase.auth().onAuthStateChanged((user)=>{
			this.user=user;
		})
	}

	resolveFirebaseQuery(sub){
		return this.fb.child('messages').orderByChild('timestamp');
	}

}