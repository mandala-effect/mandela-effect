import React, { useState } from 'react';

export default function App(props) {
	return (
		<div className="AppPage">
			<h1>
				I changed this on the {props.page} page just to check it out. And styled
				it!
			</h1>
			<p>Hi there Jessalynn. This app and Sass must be working!</p>
			<button className="btn-main">Hi</button>
		</div>
	);
}
