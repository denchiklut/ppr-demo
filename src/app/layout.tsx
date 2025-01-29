import { type ReactNode, Suspense } from 'react'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Loader } from '@/components/loader'
import { body } from '@/app/css'


type Props = Readonly<{ children: ReactNode; }>

export default function RootLayout({children}: Props) {
    'use static'
    return (
        <html lang="en">
            <body style={body}>
                <Suspense fallback={<Loader for='header'/>}>
                    <Header/>
                </Suspense>
                {children}
                <Suspense fallback={<Loader for='footer '/>}>
                    <Footer/>
                </Suspense>
            </body>
        </html>
    );
}
