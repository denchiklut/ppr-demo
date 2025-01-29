import { fetchFooterData } from '@/api'
import { header as css } from '@/app/css'

export async function Footer() {
    'use cache'
    const footer = await fetchFooterData()
    console.log('RENDERING Footer')

    return (
        <nav style={css}>
            Footer {'>'} fetch-{footer.ms} -- Data {footer.random}
        </nav>
    )

}