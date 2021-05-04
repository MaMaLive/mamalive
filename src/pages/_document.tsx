import Document, {Html, Head, Main, NextScript} from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <div dangerouslySetInnerHTML={{ __html: `<script type="text/javascript" src="https://hosted.muses.org/mrp.js"></script>
                        <script type="text/javascript">
                            MRP.insert({
                            'url':'https://centova2.euroti.com.br:20056/stream?type=http&nocache=24',
                            'codec':'mp3',
                            'volume':51,
                            'autoplay':true,
                            'jsevents':true,
                            'buffering':0,
                            'title':'MAMALIVE',
                            'welcome':'Bem vindo',
                            'wmode':'transparent',
                            'skin':'e76',
                            'width':130,
                            'height':75
                            });
                        </script>
                    `
                    }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}