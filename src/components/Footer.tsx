import {Flex, Text, Box, Icon} from '@chakra-ui/react';
import {RiFacebookCircleFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill} from 'react-icons/ri'
import {SiNextDotJs} from 'react-icons/si'
export function Footer() {
    return (
        <Box
            style={{backgroundColor: '#2d2d2d'}}
        >

            <Flex
                w='100%'
                maxWidth={1140}
                mx='auto'
                flexDirection='column'
                justify='center'
                align='center'
                
            >
                <Box
                    m='5rem 0 2rem 0'
                >
                    <Icon
                        as={RiFacebookCircleFill}
                        fontSize='30px' 
                        color="white"
                        mr='3rem'
                    />
                    <Icon
                        as={RiTwitterFill}
                        fontSize='30px' 
                        color="white"
                        mr='3rem'
                    />
                    <Icon
                        as={RiInstagramLine}
                        fontSize='30px' 
                        color="white"
                        mr='3rem'
                    />
                    <Icon
                        as={RiYoutubeFill}
                        fontSize='30px' 
                        color="white"
                    />
                </Box>

                <Text
                    color='white'
                    textAlign='center'
                    mb= '1rem'
                >
                    Copyright (c) 2021 - MA.MA L.I.V.E - CAMPO MOURÃO
                </Text>

                <Text
                    color='white'
                    textAlign='center'
                    mb='5rem'

                >
                    Desenvolvido com <strong style={{color: 'red'}}>❤</strong> por Stéfano Pontelli &nbsp;- &nbsp;
                    <Icon
                        as={SiNextDotJs}
                        color="white"
                        fontSize='25px' 
                    />
                </Text>
            </Flex>
        </Box>
    )
}