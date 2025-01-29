import { header } from '@/app/css'

type Props = { for: string }

export function Loader({for: _for}: Props) {
    return <div style={header}>Loading {_for} ....</div>
}