import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import Buttom from './Button';
import Welcome from './Welcome';
import { Text } from 'react-native';
import styled from 'styled-components/native';
const CenteredView = styled.View `
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #F5FCFF;
`;
storiesOf('Welcome', module).add('to Storybook', () => React.createElement(Welcome, { showApp: linkTo('Button') }));
storiesOf('Button', module)
    .addDecorator((getStory) => React.createElement(CenteredView, null, getStory()))
    .add('with text', () => (React.createElement(Buttom, { onPress: () => true },
    React.createElement(Text, null, "Hello Buttom"))))
    .add('with some emoji', () => (React.createElement(Buttom, null,
    React.createElement(Text, null, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"))));
//# sourceMappingURL=index.js.map