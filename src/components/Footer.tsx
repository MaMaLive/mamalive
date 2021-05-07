import {Flex, Text, Box, Icon, Link} from '@chakra-ui/react';
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
                    <Link
                        href="https://www.facebook.com/MaMaLiveWebTv/"
                        isExternal
                        _focus={{border:'none'}}
                    >
                        <Icon
                            as={RiFacebookCircleFill}
                            fontSize='30px' 
                            color="white"
                            mr='3rem'
                        />
                    </Link>
                        
                    <Link
                        href="https://twitter.com/MaMaLiveWeb"
                        isExternal
                        _focus={{border:'none'}}
                    >
                        <Icon
                            as={RiTwitterFill}
                            fontSize='30px' 
                            color="white"
                            mr='3rem'
                        />
                    </Link>

                    <Link
                        href="https://www.instagram.com/mamalivewebtv/"
                        isExternal
                        _focus={{border:'none'}}
                    >
                        <Icon
                            as={RiInstagramLine}
                            fontSize='30px' 
                            color="white"
                            mr='3rem'
                        />
                    </Link>

                    <Link
                        href="https://www.youtube.com/channel/UCvoTtWCFNCvTKh88NewldQg"
                        isExternal
                        _focus={{border:'none'}}
                    >
                        <Icon
                            as={RiYoutubeFill}
                            fontSize='30px' 
                            color="white"
                        />
                    </Link>
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
                    Desenvolvido com <strong style={{color: 'red'}}>❤</strong> por {" "}
                    <Link
                        href='https://api.whatsapp.com/send?phone=5514981457002'
                        isExternal
                        _focus={{border:'none'}}
                    >

                        Stéfano Pontelli  
                    </Link>
                    
                    &nbsp;- &nbsp;
                    <Link 
                        href="https://nextjs.org/"
                        isExternal
                        _focus={{border:'none'}}
                    >
                        <Icon
                            as={SiNextDotJs}
                            color="white"
                            fontSize='25px' 
                        />
                    </Link>
                </Text>
            </Flex>
        </Box>
    )
}