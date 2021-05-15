import {Flex, Text, Box, Heading, useBreakpointValue} from '@chakra-ui/react';

export function Live() {

    const isWiderVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (

        <Box 
            w='100%'
            h='82vh'
            bgImage="url('/images/bg.png')" 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='100% 130%'
            id='live'

        >
            <Flex
                maxWidth={1140}
                w='100%'
                h='100%'
                mx='auto'
                align='center'
                justify='space-between'
                px='6'
                flexDirection={isWiderVersion === true ? 'row' : 'column'}

            >

                <Box
                >
                    <Heading
                        color="yellow.500"
                        fontSize='67px'
                        letterSpacing='2px'
                        mb='1rem'
                    >
                        AO VIVO
                    </Heading>

                    <Heading
                        fontSize='67px'
                        color="white"
                        letterSpacing='2px'
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

                </Box>

                    <Box 
                        w={[ "384px", "512px" , "768px"]}
                        h={[ "216px", "288px" , "432px"]}
                        position='relative'
                    >
                        <iframe
                            title="Ao vivo"
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