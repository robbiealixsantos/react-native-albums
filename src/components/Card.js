import React, { Component } from 'react';
import { View } from 'react-native';

const Card = () => {
	return (
		<View style={styles.containerStyle}>
			
		</View>
	);
};

const style = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 10,
		marginTop: 10
	}
};

export default Card;