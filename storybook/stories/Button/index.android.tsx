import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

const Button: React.StatelessComponent<IProps> = props => (
	<TouchableNativeFeedback onPress={props.onPress}>{props.children}</TouchableNativeFeedback>
);

interface IProps {
	children: any,
	onPress?: () => void,
}

export { Button as default };
