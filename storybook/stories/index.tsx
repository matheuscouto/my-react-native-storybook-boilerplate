import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Buttom from './Button';

import Welcome from './Welcome';
import { Text } from 'react-native';

import styled from 'styled-components/native';

const CenteredView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #F5FCFF;
`;

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}  />);

storiesOf('Button', module)
	.addDecorator((getStory: any) => <CenteredView>{getStory()}</CenteredView>)
	.add('with text', () => (
		<Buttom onPress={() => true}>
			<Text>Hello Buttom</Text>
		</Buttom>
	))
	.add('with some emoji', () => (
		<Buttom>
			<Text>😀 😎 👍 💯</Text>
		</Buttom>
	));
