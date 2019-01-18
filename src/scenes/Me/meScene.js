import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform, Image, Alert } from "react-native";
import { inject } from 'mobx-react';
import color from '../../feature/color';
import firebase from 'firebase';

@inject("store")

export default class MeScreen extends Component {

	static navigationOptions = {
		title: 'Me',
		headerTitleStyle: {
			color: '#616161',
		},
		headerStyle: {
			backgroundColor: color.dark,
		},
	}

	constructor(props){
		super(props)
	}

	signOut(){
		const { auth } = this.props.store
		const { navigate } = this.props.navigation
		auth.signOut()
			.then(() => { navigate ('Login')}).catch(error => {
				switch(error.code){
					default:
						Alert.alert('Logout failed.');
				}
			})
	}

	like(){
		Alert.alert('Thank you!:) Glad that you like it!!')
	}

	moreInfo(){
		Alert.alert('Check out https://github.com/EvianWang/FamChat')
	}

	userInfo(){
		const email = firebase.auth().currentUser.email
		Alert.alert(email)
	}

	render(){
		const { auth } = this.props.store
		let username = firebase.auth().currentUser.email.split('@')[0];
		return (
			<View style={{backgroundColor: color.primary, flex:1}}>
				<View style={styles.container}>
					<View style={styles.infoView}>
						<TouchableOpacity 
							onPress={this.userInfo.bind(this)}>
							<View style={styles.buttonContainer}>
								<Image
									style={styles.iconStyle}
									source={require('../../images/user.png')}
								/>
								<Text style={styles.infoText}>{'Username: ' + username}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.infoView}>
						<TouchableOpacity 
							onPress={this.like.bind(this)}>
							<View style={styles.buttonContainer}>
								<Image
									style={styles.iconStyle}
									source={require('../../images/like.png')}
								/>
								<Text style={styles.infoText}>{'Like this app'}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.infoView}>
						<TouchableOpacity 
							onPress={this.moreInfo.bind(this)}>
							<View style={styles.buttonContainer}>
								<Image
									style={styles.iconStyle}
									source={require('../../images/info.png')}
								/>
								<Text style={styles.infoText}>{'More about this app'}</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.tabBarInfoContainer}>
					<TouchableOpacity onPress={this.signOut.bind(this)}>
						<Text style={styles.tabBarInfoText}>Logout</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    padding: 8,
	    flexDirection: 'column',
	    backgroundColor: color.primary,
	    borderRadius: 5
	},

	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios:{
				shadowColor: 'Black',
				shadowOffset: {height: -3},
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},

	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109,1)',
		textAlign: 'center',
	},

	userInfoView: {
		flexDirection: 'row',
	    backgroundColor: color.light,
	    borderRadius: 5,
	    padding: 3,
	    height: 45,
	},

	infoView: {
	    backgroundColor: color.light,
	    borderRadius: 5,
	    padding: 3,
	    height: 45,
	    marginTop: '2%',
	},

	iconStyle: {
		width: 30,
		height: 30,
		marginLeft: 8,
		marginTop: 3,
	},

	infoText: {
	    flex: 1,
	    color: '#616161',
	    fontSize: 20,
	    fontWeight: 'bold',
	    paddingLeft: 16,
	    marginTop:5,
  	},

  	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

});