import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react/native'
import { Icon } from 'react-native-elements'
import color from '../../../feature/color'
import { inject } from 'mobx-react';

@inject("store")
@observer
export default class MessageFormComponent extends Component {
	@observable messageText = '';

	constructor(props){
		super(props)
	}

	addMessage(){
		const { message } = this.props.store
		this.messageText == '' ? {} : message.addMessage({text: this.messageText})
	}

	render(){
		const { auth } = this.props.store

		return(
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeholder="Say something cool..."
					onChangeText={(message) => this.messageText = message}
				/>
				<TouchableOpacity
					style={{flex: 1}}
					onPress={this.addMessage.bind(this)}>
					<Image
          				style={{width: 40, height: 40}}
          				source={require('../../../images/icons8-paper-plane-30.png')}
        			/>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		borderTopWidth: 1,
		borderTopColor: '#cccccc',
	},

	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
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
		fontSize: 25,
		lineHeight: 40,
		width: 370,
		height: 40,
		backgroundColor: color.dark,
		borderRadius: 5,
		paddingLeft: 10,
	},
})