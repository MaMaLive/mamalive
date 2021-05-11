import Head from 'next/head'
import {signIn, useSession} from 'next-auth/client'
import Router from 'next/router'
import {Flex, Button, Image, Stack, Text, Icon} from '@chakra-ui/react';
import {Input} from '../components/Forms/Input'
import {FaGithub} from 'react-icons/fa'


export default function AdminAuth() {
    const[session] = useSession()

    if(session){
        Router.push(`/dashboard`)
    }

    return session ? (
        <>
            <Text>Você já está logado</Text>
        </>
    ) : (
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

                    <Button
                        type='button'
                        onClick={() =>signIn('github', { callbackUrl: 'http://localhost:3000/dashboard' })}
                        mt='6'
                        w='100%'
                        colorScheme='red' 
                    >
                        <Icon
                            as={FaGithub}
                        />
                        <Text
                            ml='2'
                        >
                            Sign in with GitHub
                        </Text>
                    </Button>

                </Flex>

            </Flex>
        </>
    )
}