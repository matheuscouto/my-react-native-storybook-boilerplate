import React from 'react';
import { TouchableHighlight } from 'react-native';

const Button: React.StatelessComponent<IProps> = props => (
	<TouchableHighlight onPress={props.onPress}>{props.children}</TouchableHighlight>
);

interface IProps {
	children: any,
	onPress?: () => void,
}

export { Button as default };
