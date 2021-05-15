import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'

import {Flex, Box, Image, VStack, SimpleGrid, Button, Text, useBreakpointValue, NumberInput, NumberInputField} from '@chakra-ui/react';
import {Input} from '../components/Forms/Input'
import {Textarea} from '../components/Forms/TextArea'

type ContactFormData = {
    nameContact: string;
    messageContact: string;
    email: string;
    phone: number;
    city: string;
}


export function Contact() {

    const isWiderVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const [messagesent, setMessagesent] = useState('nulo')

    const participateSchema = yup.object().shape({
        nameContact: yup.string().required('Por favor escreva seu nome'),
        messageContact: yup.string().required('Por favor escreva uma mensagem'),
        email: yup.string().required('Por favor escreva seu email'),
        phone: yup.number().required('Por favor escreva um número de telefone').integer('Digite um número de telefone válido')
        .typeError('Digite um número de telefone válido')
        .moreThan(0, 'Digite um número de telefone válido')
        .lessThan(10000000000000, 'Digite um número de telefone válido'),
        city: yup.string().required('Por favor escreva o nome da sua cidade'),

    })

    const {register, handleSubmit, formState } = useForm({
        resolver: yupResolver(participateSchema)
    })

    const {errors} = formState

    const handleParticipate: SubmitHandler<ContactFormData> = async (data) => {
        setMessagesent('nulo')
        await new Promise(resolve => setTimeout(resolve, 2000))
        // console.log(data)

        try {
            
            axios.post('https://sheet.best/api/sheets/044325c5-de99-480f-af49-78aeb1eb4b06', {
                name: data.nameContact,
                message: data.messageContact,
                email: data.email,
                phone: data.phone,
                city: data.city,

            }).then(response => {
                if(response.status !== 200) {
                    setMessagesent('erro')
                    console.log(response)
                }
                if(response.status === 200) {
                    setMessagesent('enviado')
                }
            })
            
            
        } catch (error) {
            console.log(error)
        }

        
    }

    return (
        <Box 
            w='100%'
            h='100%'
            bgImage="url('/images/bg.png')" 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='100% 100%'
            id='contact'
            p={['2rem 0rem', '6rem 0rem']}
        >
            <Box
                px='2rem'

            >

                <Box
                    maxWidth={855}
                    as='form'
                    w='100%'
                    mx='auto'
                    backgroundColor='white'
                    onSubmit={handleSubmit(handleParticipate)}
                    name='contact'
                    
                >
                    
                    <Image
                        w="100%"
                        h={["100%"]}
                        objectFit="contain"
                        src="/images/FundoContato.png"
                        alt="Cabeçalho Contatos"
                    />
                    <Box
                        px='16px'
                    >


                        <VStack spacing='4' mt={isWiderVersion === true ? '2rem' : '1rem'}>
                            <SimpleGrid minChildWidth='200px' spacing='8' w='100%'>
                                <Input 
                                    name="nameContact" 
                                    label="Nome" 
                                    color="black"
                                    error={errors.nameContact}
                                    {...register('nameContact')}
                                    variant='flushed'

                                />
    {/*                             <NumberInput
                                    min={0}
                                    inputMode='tel'
                                >

                                    <NumberInputField name='phone'  label="Telefone" color="black"/>
                                </NumberInput> */}
                                    <Input 
                                        name='phone' 
                                        label="Telefone" 
                                        color="black"
                                        error={errors.phone}
                                        {...register('phone')}
                                        variant='flushed'

                                        />

                            </SimpleGrid>

                            <SimpleGrid minChildWidth='200px' spacing='8' w='100%'>
                                <Input 
                                    name='email' 
                                    type='email' 
                                    label="E-mail" 
                                    color="black"
                                    error={errors.email}
                                    {...register('email')}
                                    variant='flushed'
                                    />
                                <Input 
                                    name="city" 
                                    label="Cidade" 
                                    color="black"
                                    error={errors.city}
                                    {...register('city')}
                                    variant='flushed'

                                    />
                            </SimpleGrid>
                        </VStack>
                        

                        <Box
                            mt='3rem'
                            align='center'
                        >
                            
                                <Textarea
                                    maxWidth='100%'
                                    name='messageContact'
                                    color='gray.900'
                                    background='gray.50'
                                    placeholder='Envie-nos uma mensagem'
                                    _placeholder={{color: 'gray.500'}}
                                    error={errors.messageContact}
                                    {...register('messageContact')}


                                />
                                {messagesent === 'enviado' ? 
                                    <Text>
                                        Agradecemos seu contato!
                                    </Text>
                                : messagesent === 'erro' ? 
                                    <Text>
                                        Não conseguimos pegar seu contato, por favor tente novamente mais tarde.
                                    </Text>
                                : <></>
                                }
                            <Button 
                                m='2rem 0 4rem 0' 
                                type='submit'
                                isLoading={formState.isSubmitting}
                            >
                                Enviar
                            </Button>

                        </Box>

                    </Box>
                    
                </Box> 
            </Box>
        </Box>
    )
}