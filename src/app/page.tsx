import  { Suspense } from 'react'
import { home } from '@/app/css'
import {  Slow, Button } from '@/components/main'


export default async function HomePage() {
	'use cache'

	return (
		<main style={home}>
			<Button/>
			<Suspense fallback={<p>Loading...</p>}>
				<Slow timeout={5000}/>
			</Suspense>
		</main>
	);
}


