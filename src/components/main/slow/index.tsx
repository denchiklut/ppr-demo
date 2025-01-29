// import { cookies } from 'next/headers'

type Props = {
	timeout: number;
}

export async function Slow({timeout}: Props) {

	const data  = await fetch(`http://localhost:3005?ms=${timeout}`).then(res => res.json());

	return (
		<p>
			Slow {'>'} fetch-{data.ms} -- Data {data.random}
		</p>
	)
}








export async function CachedSlow({timeout}: Props) {
	// 'use cache'
	const data  = await fetch(`http://localhost:3005?ms=${timeout}`).then(res => res.json());

	return (
		<p>
			CachedSlow component blocked: for {data.ms} data: {data.random}
		</p>
	)
}

