import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);
	// const firstValue = text || 'hello world';
	// const secondValue = text && 'hello world';

	return (
		<>
			<h1>{text || 'john'}</h1>
			<button className='btn' onClick={() => setIsError(!isError)}>
				toggle error
			</button>
			{isError && <h1>Error....</h1>}
			{isError ? (
				<p>theres an error</p>
			) : (
				<div>
					<h2>there is no error</h2>
				</div>
			)}
			{/* <h2>{firstValue}</h2>
			<h2>value : {secondValue}</h2>; */}
		</>
	);
};

export default ShortCircuit;
