import React from 'react';
import styled from 'styled-components/native';

/*
interface Props {
  showApp?: () => void,
}
*/

interface Props {
	showApp: () => void;
}

export default class Welcome extends React.Component<Props> {
	showApp(event: any) {
		event.preventDefault();
		if (this.props.showApp) {
			this.props.showApp();
		}
}

render() {
		return (
			<StyledView>
				<Header>Welcome to React Native Storybook (with Typescript)</Header>
				<Content>
					This is a UI Component development environment for your React Native app. Here you can
					display and interact with your UI components as stories. A story is a single state of one
					or more UI components. You can have as many stories as you want. In other words a story is
					like a visual test case.
				</Content>
				<Content>
					We have added some stories inside the "storybook/stories" directory for examples. Try
					editing the "storybook/stories/Welcome.js" file to edit this message.
				</Content>
			</StyledView>
		);
	}
}

const StyledView = styled.View`
	flex: 1;
	justify-content: center;
	padding: 24px;
`;

const Header = styled.Text`
	font-size: 18;
	margin-bottom: 18;
`;

const Content = styled.Text`
	font-size: 12;
	margin-bottom: 10;
	line-height: 18;
`;