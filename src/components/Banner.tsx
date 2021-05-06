import {Flex, Heading} from '@chakra-ui/react';
export function Banner() {
    return (
        <div
            style={{backgroundColor: '#282750'}}
        >

            <Flex
                w='100%'
                maxWidth={1140}
                mx='auto'
                justify='center'
                
            >
                <Heading
                    color='white'
                    fontSize='67px'
                    textAlign='center'
                    m= '5rem 0'
                >
                    TOTALMENTE DIGITAL E MULTIPLATAFORMA
                </Heading>
            </Flex>
        </div>
    )
}