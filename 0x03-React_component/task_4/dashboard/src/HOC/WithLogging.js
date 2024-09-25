import React from 'react';

function getComponentName(wrappedComponent) {
	return wrappedComponent.displayName || wrappedComponent.name || 'Component';
}


function WithLogging(wrappedComponent) {
	const wrappedComponentName = getComponentName(wrappedComponent);

	class EnhancedComponent extends React.Component {
		componentDidMount() {
			console.log(
				`Component ${wrappedComponentName} is moounted`
				)
		}

		componentWillUnmount() {
			console.log(
				`Component ${wrappedComponentName} is going to unmount`
			);
		}

		render() {
			<wrappedComponent {...this.props} />
		}
	}
	EnhancedComponent.displayName = `WithLogging(${wrappedComponentName})`

	return EnhancedComponent
}
