import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { View, Text, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import color from '../feature/color';

@inject("store")

@observer
export default class AuthLoadingScreen extends Component {
	constructor(props){
		super(props);
		this._bootstrapAsync();
	}

	_bootstrapAsync = async () => {
		console.log("Authed User", firebase.auth().currentUser)
	
		this.props.navigation.navigate((false)? 'Main' : 'Login');
	};

	render(){
		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		marginHorizontal: 50,
		paddingTop: '50%',
	},
	textContainer:{
		flex:1,
	},
});