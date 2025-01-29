import { Suspense } from 'react'
import { Button, Slow } from '@/components/main'
import { home } from '@/app/css'


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


