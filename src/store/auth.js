import { observable, action} from 'mobx';
import firebase from 'firebase';

export default class authStore {
	@observable authUser = null;

	constructor(){
		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.authUser = user;
			}else {
				this.authUser = null;
			}
		})
	}

	@action
	signIn({email, password}){
		if(this.authUser) {
			return Promise.resolve(this.authUser)
		}
		return firebase.auth().signInWithEmailAndPassword(email,password)
	}

	@action
	signUp({email, password}){
		return firebase.auth().createUserWithEmailAndPassword(email,password)
	}

	@action
	signOut(){
		return firebase.auth().signOut()
	}
}