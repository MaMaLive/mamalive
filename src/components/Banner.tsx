import {Flex, Heading, Box} from '@chakra-ui/react';
export function Banner() {
    return (
        <Box
            style={{backgroundColor: '#282750'}}
        >

            <Flex
                w='100%'
                maxWidth={1140}
                mx='auto'
                justify='center'
                px='6'

                
            >
                <Heading
                    color='white'
                    fontSize={[ "32px", "48px" , "64px"]}
                    textAlign='center'
                    m= '5rem 0'
                >
                    TOTALMENTE DIGITAL E MULTIPLATAFORMA
                </Heading>
            </Flex>
        </Box>
    )
}