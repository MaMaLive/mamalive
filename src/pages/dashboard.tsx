import Head from 'next/head'
import {signOut, useSession} from 'next-auth/client'

import {Flex, Button, Image, Stack, Text, Icon} from '@chakra-ui/react';
import {FaSignOutAlt} from 'react-icons/fa'


export default function Dashboard() {
    const[session] = useSession()

    return session ? (
        <>  
            <Head>
            <title>MaMa Live | #Usuário</title> 
            </Head>
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
                    Bem vindo #Admin
                </Text>

                <Button
                    variant='unstyled'
                    onClick={() => signOut({ callbackUrl: 'http://localhost:3000/admin-auth' })}
                >
                    <Icon
                        as={FaSignOutAlt}
                    />
                </Button>

            </Flex>
        </>

    ) : (
        <>
            <Text>
                Você não está logado
            </Text>
        </>
    )
}