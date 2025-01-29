import { header } from '@/app/css'
import { JSX } from 'react'

type Props  = {
	for: string
}
export function Loader({for: _for}: Props): JSX.Element {
	return <div style={header}>Loading {_for} ....</div>
}