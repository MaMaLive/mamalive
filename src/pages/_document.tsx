import Document, {Html, Head, Main, NextScript} from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet"></link>
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
                    <meta name="title" content="MaMa Live | A sua WebRádio de Campo Mourão - MaMa Live"/>
                    <meta name="description" content="MaMa Live é uma webrádio de Campo Mourão, com programas diários, sempre com conteúdos atualizados da nossa cidade, do Brasil e do mundo.
                    "/>

                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://mamalive.com.br/"/>
                    <meta property="og:title" content="MaMa Live | A sua WebRádio de Campo Mourão - MaMa Live"/>
                    <meta property="og:description" content="MaMa Live é uma webrádio de Campo Mourão, com programas diários, sempre com conteúdos atualizados da nossa cidade, do Brasil e do mundo.
                    "/>
                    <meta property="og:image" content="/images/Logo.png"/>

                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://mamalive.com.br/"/>
                    <meta property="twitter:title" content="MaMa Live | A sua WebRádio de Campo Mourão - MaMa Live"/>
                    <meta property="twitter:description" content="MaMa Live é uma webrádio de Campo Mourão, com programas diários, sempre com conteúdos atualizados da nossa cidade, do Brasil e do mundo.
                    "/>
                    <meta property="twitter:image" content="/images/Logo.png"></meta>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}