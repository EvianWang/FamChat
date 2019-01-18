import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react/native'
import color from '../../../feature/color'
import { inject } from 'mobx-react'
import relativeDate from 'relative-date'
//import MessageRowComponent from './MessageRow/messageRowComponent'

const ITEM_HEIGHT = 50;
const MESSAGE_TEXT_MARGIN = 50

@inject("store")
@observer
export default class MessagesListComponent extends Component {

	constructor(props){
		super(props)

		this.renderItem = ({item}) => {
			const { auth } = this.props.store;
			const isCurrentUser = auth.authUser? auth.authUser.email == item.user : false;
			const alignItems = isCurrentUser ? 'flex-end' : 'flex-start';
			const margin = isCurrentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN};
			const username = isCurrentUser ? 'you' : item.user.split('@')[0];
			const date = relativeDate(new Date(item.createdAt));
			return(
				<View 
					style={styles.messageContainer}>
					<View
		        		style={ [styles.bubbleView, {alignItems: alignItems}, margin] }>
			        	<Text
			          		style={styles.userText} >
			          		{date + ' - ' + username}
			        	</Text>
			        	<Text
			          		style={styles.messageText}>
			          		{item.text}
			        	</Text>
		        	</View>
				</View>
			)
		}
	}
	
	componentDidMount(){
		const { message } = this.props.store
		message.loadMessage()
	}
	
	/*
	componentDidUpdate(){
		const { message } = this.props.store
		if(message.messages.length){
			this.flatList.scrollToIndex({animated:true, index:0});
		}
	}
	*/

	render(){
		const { auth } = this.props.store
		const { message } = this.props.store
		const data = message.messages.reverse()
		const contentContainerStyle = message.messages.length ? null : styles.flatlistContainerStyle
		return(
			<FlatList 
				style={styles.container}
				contentContainerStyle={contentContainerStyle}
				data={data}
				renderItem={this.renderItem}
				keyExtractor={item => item.createdAt}
				//getItemLayout={this.itemLayout}
				//ListEmptyComponent={this.emptyList}
				inverted />
		)
	}
}

const styles = StyleSheet.create({
	container:{
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: color.primary
	},

	flatlistContainerStyle: {
		flexGrow: 1,
		justifyContent: 'center'
	},
	
	placeholder: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center'
	},

	messageContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.primary,
    borderRadius: 5
	},

	bubbleView: {
    backgroundColor: color.light,
    flex: 1,
    borderRadius: 8,
    padding:8
	},

	userText: {
    color: '#616161',
    fontSize: 14,
    fontWeight: 'bold'
  	},

  	messageText: {
    flex: 1,
    color: '#616161',
    fontSize: 16
  	},
})