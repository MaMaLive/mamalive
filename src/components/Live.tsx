import {Flex, Text, Box, Heading} from '@chakra-ui/react';

export function Live() {
    return (

        <Box 
            w='100%'
            h='82vh'
            bgImage="url('/images/bg.png')" 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='100% 130%'
        >
            <Flex
                maxWidth={1140}
                w='100%'
                h='100%'
                mx='auto'
                align='center'
                justify='space-between'
            >

                <Flex
                flexDirection='column'
                >
                    <Heading
                        color="yellow.500"
                        fontSize='67px'
                        letterSpacing='3px'
                        mb='2rem'
                    >
                        AO VIVO
                    </Heading>

                    <Heading
                        fontSize='67px'
                        color="white"
                        letterSpacing='3px'
                        mb='1rem'


                    >
                        AGORA
                    </Heading>

                    <Text
                        fontSize='3xl'
                        color="white"

                    >
                        De segunda a segunda
                        </Text>

                </Flex>

                <Box style={{width: '768px', height: '432px', position: 'relative'}}>
                    <iframe
                        style={{position: 'absolute', width: '100%', height: '100%', border: 'none'}}
                        src="https://playerv.srvstm.com/video/mamalive/2/true/false/VlROU2RGWnFXWFZqTTBveVl6TlNkRXh0VG5aaVVUMDkrNQ==/16:9/"
                        allowFullScreen
                    >

                    </iframe>
                </Box>

            </Flex>


        </Box>


    )
}