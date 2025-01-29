import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from 'next/cache'

type DataResponse = { ms: number; random: number }

export async function fetchHeaderData() {
    'use cache'
    const data = await fetch('http://localhost:3005?ms=3000').then(res => res.json());
    cacheLife({expire: 60, stale: 0})
    cacheTag('header')

    return data as Promise<DataResponse>
}


export async function fetchFooterData() {
    'use cache'
    const data = await fetch('http://localhost:3005?ms=5000').then(res => res.json());
    cacheLife({expire: 300, stale: 0})
    cacheTag('footer')

    return data as Promise<DataResponse>
}
