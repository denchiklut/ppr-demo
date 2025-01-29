import { fetchHeaderData } from '@/api'
import { header as css } from '@/app/css'

export async function Header() {
	'use cache'
	const headerData = await fetchHeaderData()
	console.log('RENDERING HEADER')

	return (
		<nav style={css}>
			Header {'>'} fetch-{headerData.ms} -- Data {headerData.random}
		</nav>
	)

}
