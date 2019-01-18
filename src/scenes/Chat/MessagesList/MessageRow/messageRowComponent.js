import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import relativeDate from 'relative-date'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react/native'

@inject("store")
@observer
const MESSAGE_TEXT_MARGIN = 50

const MessageRowComponent = props => {
	const { auth } = this.props.store;
	const isCurrentUser = auth.authUser.email == this.props.message.email;
	const alignItems = isCurrentUser ? 'flex-end' : 'flex-start';
	const margin = isCurrentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN};
	const username = isCurrentUser ? 'you' : auth.currentUser.email.split('@')[0];
	const date = relativeDate(new Date(props.createdAt));
	return(
		<View
	      style={styles.container}>
	      <View
	        style={ [styles.bubbleView, {alignItems: alignItems}, margin] }>
	        <Text
	          style={styles.userText} >
	          {date + ' - ' + username}
	        </Text>
	        <Text
	          style={styles.messageText}>
	          {props.text}
	        </Text>
	      </View>
	    </View>
	);
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: 5
  },
  bubbleView: {
    backgroundColor: color.dark,
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
  }
})
