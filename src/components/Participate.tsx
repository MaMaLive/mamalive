import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import { format } from 'date-fns';

import {Flex, Text, Button, Icon, Box, Link, useBreakpointValue} from '@chakra-ui/react';
import {Input} from '../components/Forms/Input'
import {Textarea} from '../components/Forms/TextArea'

import {RiFacebookCircleFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill} from 'react-icons/ri'

type ParticipateFormData = {
    name: string;
    message: string;
}

export function Participate() {

    const isWiderVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const [messagesent, setMessagesent] = useState('nulo')

    const participateSchema = yup.object().shape({
        name: yup.string().required('Por favor escreva seu nome'),
        message: yup.string().required('Por favor escreva uma mensagem')
    })

    const {register, handleSubmit, formState } = useForm({
        resolver: yupResolver(participateSchema)
    })

    const {errors} = formState

    const handleParticipate: SubmitHandler<ParticipateFormData> = async (data/* , event */) => {
        setMessagesent('nulo')
        // event.preventDefault()
        await new Promise(resolve => setTimeout(resolve, 2000))
        // console.log(data)
        const date = new Date(Date.now())
        // console.log(date)
        const parsedDate = format(date, 'dd-MM-yyyy')
        // console.log(parsedDate)



        try {
            
            axios.post('https://sheet.best/api/sheets/242c88f2-db88-49e3-9bfd-55c2a51a59ff', {
                name: data.name,
                message: data.message,
                date: parsedDate,
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
        <Flex 
            w='100%'
            maxWidth={1140}
            mx='auto'
            mt='6rem'
            mb='6rem'
            align='center'
            justify='space-between'
            px='6'
            flexDirection={isWiderVersion === true ? 'row' : 'column'}

        >
            <Flex 
                as='form'
                flexDirection='column'
                onSubmit={handleSubmit(handleParticipate)}
                name='participate'
                w={isWiderVersion === true ? '50%' : '100%'}
            >
                <Text
                    mb='1rem'
                >
                    Participe de nossa programa????o.
                </Text>
                <Input
                    maxWidth='30rem'
                    color='gray.900'
                    background='gray.50'
                    placeholder='Nome'
                    name='name'
                    _placeholder={{color: 'gray.500'}}
                    error={errors.name}
                    {...register('name')}

                >


                </Input>
                <Textarea
                    mt='2rem'
                    maxWidth='30rem'
                    color='gray.900'
                    background='gray.50'
                    name='message'
                    placeholder='Envie-nos uma mensagem'
                    _placeholder={{color: 'gray.500'}}
                    error={errors.message}
                    {...register('message')}

                />

                {messagesent === 'enviado' ? 
                    <Text>
                        Mensagem enviada com sucesso!
                    </Text>
                 : messagesent === 'erro' ? 
                     <Text>
                        Mensagem n??o enviada, por favor tente novamente mais tarde.
                    </Text>
                  : <></>}

                <Button
                    mt='2rem'
                    mx={isWiderVersion === true ? '0' : 'auto'}
                    mb={isWiderVersion === true ? '0' : '3rem'}
                    w='8rem'
                    colorScheme='orange'
                    type='submit'
                    isLoading={formState.isSubmitting}
                >
                    Enviar
                </Button>
            </Flex>
            <Box
                w={isWiderVersion === true ? '50%' : '100%'}
                align='center'
            >
                <Link
                    href="https://www.facebook.com/MaMaLiveWebTv/"
                    isExternal
                    _focus={{border:'none'}}
                >

                        <Icon
                        as={RiFacebookCircleFill}
                        fontSize={[ '50px' ,'60px' ]}
                        color="#546bb0"
                        mr={isWiderVersion === true ? '3rem' : '1rem'}
                        />
                </Link>

                <Link
                        href="https://twitter.com/MaMaLiveWeb"
                        isExternal
                        _focus={{border:'none'}}
                >

                    <Icon
                    as={RiTwitterFill}
                    fontSize={[ '50px' ,'60px' ]}
                    color="#546bb0"
                    mr={isWiderVersion === true ? '3rem' : '1rem'}
                    />
                </Link>

                <Link
                    href="https://www.instagram.com/mamalivewebtv/"
                    isExternal
                    _focus={{border:'none'}}
                >

                    <Icon
                    as={RiInstagramLine}
                    fontSize={[ '50px' ,'60px' ]}
                    color="#546bb0"
                    mr={isWiderVersion === true ? '3rem' : '1rem'}
                    />
                </Link>

                <Link
                    href="https://www.youtube.com/channel/UCvoTtWCFNCvTKh88NewldQg"
                    isExternal
                    _focus={{border:'none'}}
                >

                    <Icon
                    as={RiYoutubeFill}
                    fontSize={[ '50px' ,'60px' ]}
                    color="#546bb0"
                    />
                </Link>
            </Box>
        </Flex>
    )
}