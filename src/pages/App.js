import React, { useState } from 'react';

export default function App(props) {
	return (
		<div className="AppPage">
			<h1>This is the {props.page} page. This is a test.</h1>
			<p>This is a test</p>
			<button className="btn-main">Hi</button>
		</div>
	);
}
