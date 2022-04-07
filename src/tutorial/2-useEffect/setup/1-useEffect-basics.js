import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);
	// runs after every re-render

	useEffect(() => {
		console.log('call useEffect');
		if (value > 2) {
			document.title = `New Messages(${value})`;
		}
	}, [value]);
	console.log('render effect');
	return (
		<>
			<h1>{value}</h1>
			<button className='btn' onClick={() => setValue(value + 1)}>
				click me
			</button>
		</>
	);
};

export default UseEffectBasics;
