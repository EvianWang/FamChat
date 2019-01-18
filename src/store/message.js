import { action } from "mobx";
import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';
import {Platform} from 'react-native';
import firebaseService from './config';
import { observable } from 'mobx';

//const FIREBASE_REF_MESSAGES = firebaseService.database().ref('messages')
const FIREBASE_REF_MESSAGES_LIMIT = 20

export default class MessageStore extends MobxFirebaseStore {
	@observable messages = [];
	constructor(){
		super(firebase.database().ref());
		firebase.auth().onAuthStateChanged((user) =>{
			this.user = user;
			if(this.user) {
				this.storage = firebase.storage().ref(this.user.uid)
			}
		})

	}

	@action
	addMessage(text){
		var time = new Date().getTime();
		var date = new Date(time);
		let email = firebase.auth().currentUser.email;
		let message = {text: text, createdAt: date.toString(), user: email};
		let key = this.fb.child('messages').push().key;
		let updates = {};
		updates['/messages/' + key] = message;
		this.fb.update(updates);
	}
	
	@action
	loadMessage(){
		this.fb.child('messgaes').limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snap)=> {
			let items = [];
			snap.forEach((child) => {
				items.push({
					text: child.val().text,
					createdAt: child.val().createdAt,
					user: child.val().user,
				});
			});
			this.messages = items;
		});
	}
	
}