import {Flex, Text, Input, Textarea, Button, Icon, Box, Link} from '@chakra-ui/react';
import {RiFacebookCircleFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill} from 'react-icons/ri'
export function Participate() {
    return (
        <Flex 
            w='100%'
            maxWidth={1140}
            mx='auto'
            mt='6rem'
            mb='6rem'
            align='center'
            justify='space-between'
        >
            <Flex 
                flexDirection='column'
            >
                <Text
                    mb='1rem'
                >
                    Participe de nossa programação.
                </Text>
                <Input
                    mb='2rem'
                    w='30rem'
                    color='gray.900'
                    background='gray.50'
                    placeholder='Nome'
                    _placeholder={{color: 'gray.500'}}

                >

                </Input>
                <Textarea
                    mb='2rem'
                    w='30rem'
                    color='gray.900'
                    background='gray.50'
                    placeholder='Envie-nos uma mensagem'
                    _placeholder={{color: 'gray.500'}}

                />
                <Button
                    w='8rem'
                    colorScheme='orange'
                >
                    Enviar
                </Button>
            </Flex>
            <Box
            >
                <Link
                    href="https://www.facebook.com/MaMaLiveWebTv/"
                    isExternal
                    _focus={{border:'none'}}
                >

                        <Icon
                        as={RiFacebookCircleFill}
                        fontSize='60px' 
                        color="#546bb0"
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
                    fontSize='60px' 
                    color="#546bb0"
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
                    fontSize='60px' 
                    color="#546bb0"
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
                    fontSize='60px' 
                    color="#546bb0"
                    />
                </Link>
            </Box>
        </Flex>
    )
}