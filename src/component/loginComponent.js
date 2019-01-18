import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, Alert, StyleSheet,Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';
import color from '../feature/color';

@observer
export default class Login extends Component{
	@observable email = '';
	@observable password = '';

	constructor(props){
		super(props)
	}

	signIn(){
		const { auth } = this.props.store
		const { navigate } = this.props.navigation
		auth.signIn({email: this.email, password: this.password})
			.then(() => { navigate ('Main')}).catch(error => {
				switch(error.code){
					case 'auth/invalid-email':
						Alert.alert('Invalid email address.');
						break;
					case 'auth/wrong-password':
						Alert.alert('Invalid email addresa or password.');
						break;
					default:
						Alert.alert('Invalid User.');
				}
			})
	}

	signUp(){
		const { auth } = this.props.store
		const { navigate } = this.props.navigation
		auth.signUp({email: this.email, password: this.password})
			.then(() => {
				navigate('Main')
			}).catch(error => {
				switch(error.code){
					case 'auth/email-already-in-use':
						Alert.alert('This email address is already taken');
						break;
					case 'auth/invalid-email':
						Alert.alert('Invalid email address.');
						break;
					case 'auth/weak-password':
						Alert.alert('Your password is too weak');
						break;
					default:
						Alert.alert('Check your internet connection');
				}
			})
	}

	render(){
		const { auth } = this.props.store
		return(
			<View style={styles.container}>
				<View style={styles.textInputContainer}>
					<Icon
						name='person'/>
					<TextInput
						style={styles.textInput}
						placeholder="Email"
						placeholderTextColor='#ffffff'
						onChangeText={(email) => this.email = email}
					/>
				</View>
				<View style={styles.textInputContainer}>
					<Icon
						name='lock'/>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						secureTextEntry={true}
						placeholderTextColor='#ffffff'
						onChangeText={(pass)=> this.password = pass}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={{marginTop:'10%',marginRight:'20%'}}
						onPress={this.signUp.bind(this)}
					>
						<View>
							<Text style={styles.buttonText}>SignUp</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{marginTop:'10%'}}
						onPress={this.signIn.bind(this)}
					>
						<View>
							<Text style={styles.buttonText}>Login</Text>
						</View>
					</TouchableOpacity>			
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},

	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '5%',
	},

	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonText: {
		fontSize: 35,
		fontWeight: 'bold',
		color: '#616161',
	},
	textInput: {
		fontSize: 30,
		lineHeight: 40,
		width: 320,
		height: 45,
		backgroundColor: color.dark,
		borderRadius: 5,
		paddingLeft: 10,
	},
})