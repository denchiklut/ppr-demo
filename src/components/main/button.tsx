'use client';

import { useState } from 'react'

export function Button() {
	const [count, setCount] = useState(0);

	return (
		<div>
			{count}
			<button onClick={() => setCount(c => c + 1)}>click me</button>
		</div>
	)
}