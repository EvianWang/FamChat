import React, { Component } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import { observer } from 'mobx-react/native'
import color from '../../../feature/color'
import { inject } from 'mobx-react'
import MessageRowComponent from './MessageRow/messageRowComponent'

const ITEM_HEIGHT = 50;

@inject("store")
@observer
export default class MessagesListComponent extends Component {

	constructor(props){
		super(props)	
	

		this.renderItem = ({item}) => {
			return <MessageRowComponent message={item} />
		}

		this.itemLayout = (data,index) => (
			return ({length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index});
		)

		this.emptyList = () => {
			return{
				<Text style={styels.placeholder}>No more messages.</Text>
			}
		}
	}

	componentDidMount(){
		const { message } = this.props.store
		message.loadMessage()
	}

	componentDidUpdate(){
		const { message } = this.props.store
		if(message.messages.length){
			this.flatList.scrollToIndex({animated:true, index:0});
		}
	}

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
				getItemLayout={this.itemLayout}
				ListEmptyComponent={this.emptyList}
				inverted />
		)
	}
}

const styles = StyleSheet.create({
	container:{
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#eeeeee'
	},

	flatlistContainerStyle: {
		flexGlow: 1,
		justifyContent: 'center'
	},
	
	placeholder: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center'
	}
})