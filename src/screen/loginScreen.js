import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { inject } from 'mobx-react';
import color from '../feature/color';
import Login from '../component/loginComponent';

@inject("store")

export default class LoginScreen extends Component {
	constructor(props){
		super(props)
	}

	render(){
		const {store} = this.props
		return (
			<View style={{backgroundColor: color.light, flex:1}}>
				<View style={styles.container}>
					<Image style={{width:200, height:200}}
						source={require('../images/logo1.jpg')}
					/>
					<Text style={styles.text}>Welcome to FamChat.</Text>
				</View> 
					<Login {...this.props}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.light,
		alignItems: 'center',
		paddingTop: '25%',
	},
	text: {
		fontSize: 20,
		color: color.dark,
		lineHeight: 24,
		width: '75%',
		marginTop: '5%',
		textAlign: 'center',
	}
})