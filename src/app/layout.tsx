import { Suspense, type ReactNode } from "react"
import { body} from '@/app/css'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Loader } from '@/components/loader'




type Props = Readonly<{ children: ReactNode; }>
export default  function RootLayout({children}: Props) {
    'use static'
    return (
        <html lang="en">
            <body style={body}>
                <Suspense fallback={<Loader for='header'/>}>
                    <Header/>
                </Suspense>
                {children}
                <Suspense fallback={<Loader for='footer'/>}>
                    <Footer/>
                </Suspense>
            </body>
        </html>
    );
}
