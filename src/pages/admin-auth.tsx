import Head from 'next/head'

import {Flex, Button, Image, Stack} from '@chakra-ui/react';
import {Input} from '../components/Forms/Input'

export default function AdminAuth() {
    return (
        <>
            <Head>
            <title>MaMa Live | ADMIN</title> 
            </Head>
            <Flex
                w='100vw' 
                h='100vh'
                align='center'
                justify='center'
                bg='#161616'
            >
                <Flex
                    as='form'
                    w='100%'
                    maxWidth={360}
                    bg='#f6f6f6'
                    borderRadius={8}
                    flexDir='column'
                    align='center'
                    justify='center'
                    p='8'

                >
                    <Image
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    src="/images/Logo.png"
                    alt="Cabeçalho AuthForm"
                    mb='3'
                    />

                    <Stack spacing='4' w='100%'>

                        <Input
                            name='email'
                            type='email'
                            label="E-mail" 
                            size='lg'
                        />

                        <Input
                            name='password'
                            type='password'
                            label="Senha" 
                            size='lg'
                        />
                    </Stack>


                    <Button
                        type='submit'
                        w='100%'
                        mt='6'
                        colorScheme='blue'
                    >
                        Entrar
                    </Button>

                </Flex>

            </Flex>
        </>
    )
}