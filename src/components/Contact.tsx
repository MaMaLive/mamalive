import {Flex, Box, Image, VStack, Textarea, SimpleGrid, Button} from '@chakra-ui/react';
import {Input} from '../components/Forms/Input'

export function Contact() {
    return (
        <Box 
            w='100%'
            h='90vh'
            bgImage="url('/images/bg.png')" 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='100% 100%'
        >
            <Box
                pt='12rem'
            >

                <Flex
                    maxWidth={855}
                    w='100%'
                    mx='auto'
                    align='center'
                    backgroundColor='white'
                    flexDirection='column'
                    
                >

                    <Image
                        w="100%"
                        h="100%"
                        objectFit="contain"
                        src="/images/FundoContato.png"
                        alt="Cabeçalho Contatos"
                    />

                    <VStack spacing='8' mt='5rem'>
                        <SimpleGrid minChildWidth='200px' spacing='8' w='100%'>
                            <Input name="name" label="Nome" color="black"/>
                            <Input name='phone' label="Telefone" color="black"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='200px' spacing='8' w='100%'>
                            <Input name='email' type='email' label="E-mail" color="black"/>
                            <Input name="city" label="Cidade" color="black"/>
                        </SimpleGrid>

                        <Textarea
                            mb='2rem'
                            w='45rem'
                            color='gray.900'
                            background='gray.50'
                            placeholder='Envie-nos uma mensagem'
                            _placeholder={{color: 'gray.500'}}

                        />
                    </VStack>
                     <Button m='2rem 0 4rem 0'>
                         Enviar
                     </Button>
                    
                </Flex> 
            </Box>
        </Box>
    )
}