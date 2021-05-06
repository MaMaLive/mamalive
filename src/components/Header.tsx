import {Flex, Image, Text, Box} from '@chakra-ui/react';

export function Header() {
    return (
        <Flex
          as='header'
          w='100%'
          maxWidth={1140}
          mx='auto'
          mt='8'
          mb='8'
          px='6'
          align='center'
          justify='space-between'
        >

              <Flex
                align='center'

              >

                <Image
                    w="150px"
                    h="100%"
                    mr='4rem'
                    objectFit="contain"
                    src="/images/Logo.png"
                    alt="MaMa Live" />

                <Text
                    fontWeight="bold"
                    color="gray.900"
                    mr='4rem'
                >
                    Inicio
                </Text>
                <Text
                    fontWeight="bold"
                    color="gray.900"
                    mr='4rem'
                >
                    Programação
                </Text>
                <Text
                    fontWeight="bold"
                    color="gray.900"
                >
                    Contato
                </Text>

              </Flex>

            <Box dangerouslySetInnerHTML={{ __html: `<script type="text/javascript" src="https://hosted.muses.org/mrp.js"></script>
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

        </Flex>
    )
}