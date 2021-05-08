import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Flex, Box, Image, VStack, SimpleGrid, Button, NumberInput, NumberInputField} from '@chakra-ui/react';
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
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)

        
    }

    return (
        <Box 
            w='100%'
            h='90vh'
            bgImage="url('/images/bg.png')" 
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize='100% 100%'
            id='contact'
        >
            <Box
                pt='8rem'
            >

                <Flex
                    maxWidth={855}
                    as='form'
                    w='100%'
                    mx='auto'
                    align='center'
                    backgroundColor='white'
                    flexDirection='column'
                    onSubmit={handleSubmit(handleParticipate)}
                    name='contact'
                    
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
                            <Input 
                                name="nameContact" 
                                label="Nome" 
                                color="black"
                                error={errors.nameContact}
                                {...register('nameContact')}
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
                                />
                            <Input 
                                name="city" 
                                label="Cidade" 
                                color="black"
                                error={errors.city}
                                {...register('city')}
                                />
                        </SimpleGrid>

                        <Textarea
                            w='45rem'
                            name='messageContact'
                            color='gray.900'
                            background='gray.50'
                            placeholder='Envie-nos uma mensagem'
                            _placeholder={{color: 'gray.500'}}
                            error={errors.messageContact}
                            {...register('messageContact')}

                        />
                    </VStack>
                     <Button 
                        m='2rem 0 4rem 0' 
                        type='submit'
                        isLoading={formState.isSubmitting}
                     >
                         Enviar
                     </Button>
                    
                </Flex> 
            </Box>
        </Box>
    )
}