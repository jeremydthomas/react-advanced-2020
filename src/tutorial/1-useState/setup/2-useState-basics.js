import React, { useState } from 'react';

const UseStateBasics = () => {
	const [text, setText] = useState('moo');
	const handleClick = () => {
		if (text === 'moo') {
			setText('cow');
		} else {
			setText('moo');
		}
	};
	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className="btn" onClick={handleClick}>
				change title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
