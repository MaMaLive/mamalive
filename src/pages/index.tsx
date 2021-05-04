export default function Home() {
  return (
    <>
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
      <h1>Hello World teste5</h1>
      <script type="text/javascript" src="https://hosted.muses.org/mrp.js"></script>
      <div style={{width: '100%', paddingBottom: '56.25%', position: 'relative'}}>
          <iframe
            style={{position: 'absolute', width: '100%', height: '100%', border: 'none'}}
            src="https://playerv.srvstm.com/video/mamalive/2/true/false/VlROU2RGWnFXWFZqTTBveVl6TlNkRXh0VG5aaVVUMDkrNQ==/16:9/"
            allowFullScreen></iframe>
      </div>
    </>
  )
}
