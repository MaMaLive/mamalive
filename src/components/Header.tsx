import {Flex, Image, Text, Box, Link, Icon, useBreakpointValue, Button, VStack, HStack} from '@chakra-ui/react';
import {Link as LinkS} from 'react-scroll'
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';


export function Header() {
    const isWiderVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const [menuIsOpen, setMenuIsOpen] = useState(false)

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
                    mr={isWiderVersion && '4rem'}
                    objectFit="contain"
                    src="/images/cabecalhoMenor.png"
                    alt="MaMa Live" />

                    { isWiderVersion && (
                        <HStack spacing='4rem'>
                            <Link as={LinkS} smooth={true} to='live' _focus={{border:'none'}}>
                                <Text
                                    fontWeight="bold"
                                    color="gray.900"
                                >
                                    Inicio
                                </Text>
                            </Link>

                            <Link as={LinkS} smooth={true} to='programation' _focus={{border:'none'}}>
                                <Text
                                    fontWeight="bold"
                                    color="gray.900"
                                >
                                    Programação
                                </Text>
                            </Link>

                            <Link as={LinkS} smooth={true} to='contact' _focus={{border:'none'}}>
                                <Text
                                    fontWeight="bold"
                                    color="gray.900"
                                >
                                    Contato
                                </Text>
                            </Link>
                        </HStack>

                    )}


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

            {menuIsOpen && (
                <Box
                    bg='rgba(255, 255, 255, .9)'
                    w='100%'
                    h='100%'
                    position="fixed"
                    zIndex='30'
                    top= '0'
                    left='0'
                    onClick={() => setMenuIsOpen(false)}
                    overflow='hidden'
                >

                        <Box
                            align='center'
                            // mt = '10rem'
                           
                        >

                            <VStack 
                                spacing='7rem'
                                mt='7rem'
                            >

                                <Link as={LinkS} smooth={true} to='live' _focus={{border:'none'}} onClick={() => setMenuIsOpen(false)}>
                                    <Text
                                        fontWeight="bold"
                                        color="gray.900"
                                        fontSize="44px"
                                    >
                                        Inicio
                                    </Text>
                                </Link>

                                <Link as={LinkS} smooth={true} to='programation' _focus={{border:'none'}} onClick={() => setMenuIsOpen(false)}>
                                    <Text
                                        fontWeight="bold"
                                        color="gray.900"
                                        fontSize="44px"
                                        
                                    >
                                        Programação
                                    </Text>
                                </Link>

                                <Link as={LinkS} smooth={true} to='contact' _focus={{border:'none'}} onClick={() => setMenuIsOpen(false)}>
                                    <Text
                                        fontWeight="bold"
                                        color="gray.900"
                                        fontSize="44px"

                                    >
                                        Contato
                                    </Text>
                                </Link>
                            </VStack>
                        </Box>
                </Box>
            )}

            { isWiderVersion || (

                <Button
                    variant='unstyled'
                    _hover={{bgColor: '#e6e6ea'}}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    zIndex='31'
                >

                    <Icon
                        as ={FiMenu}
                        fontSize={32}
    
                    />
                </Button>
                
            )}


        </Flex>
    )
}