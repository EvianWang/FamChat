import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity,Platform } from "react-native";
import { inject } from 'mobx-react';
import color from '../../feature/color';

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

	render(){
		const { auth } = this.props.store
		return (
			<View style={{backgroundColor: color.primary, flex:1}}>
				<Text>I am MeScreen!</Text>
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
});