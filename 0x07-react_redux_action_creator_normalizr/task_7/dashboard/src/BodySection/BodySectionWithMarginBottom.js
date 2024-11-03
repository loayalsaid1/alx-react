import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

export default function BodySectionWithMarginBottom(props) {
	return (
		<div className={css(styles.BodySectionWithMargin)}>
			<BodySection {...props} title={props.title}>
				{props.children}
			</BodySection>
		</div>
	)
}

const styles = StyleSheet.create({
	BodySectionWithMargin: {
		marginBottom: 40
	}
})
