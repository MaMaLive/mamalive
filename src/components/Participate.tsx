import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {Flex, Text, Button, Icon, Box, Link} from '@chakra-ui/react';
import {Input} from '../components/Forms/Input'
import {Textarea} from '../components/Forms/TextArea'

import {RiFacebookCircleFill, RiTwitterFill, RiInstagramLine, RiYoutubeFill} from 'react-icons/ri'

type ParticipateFormData = {
    name: string;
    message: string;
}

export function Participate() {

    const participateSchema = yup.object().shape({
        name: yup.string().required('Por favor escreva seu nome'),
        message: yup.string().required('Por favor escreva uma mensagem')
    })

    const {register, handleSubmit, formState } = useForm({
        resolver: yupResolver(participateSchema)
    })

    const {errors} = formState

    const handleParticipate: SubmitHandler<ParticipateFormData> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)

        
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
        >
            <Flex 
                as='form'
                flexDirection='column'
                onSubmit={handleSubmit(handleParticipate)}
                name='participate'
                data-netlify="true"
                method='post'
            >
                <input type="hidden" name="form-name" value="participate" />
                <Text
                    mb='1rem'
                >
                    Participe de nossa programação.
                </Text>
                <Input
                    w='30rem'
                    color='gray.900'
                    background='gray.50'
                    placeholder='Nome'
                    _placeholder={{color: 'gray.500'}}
                    error={errors.name}
                    {...register('name')}

                >


                </Input>
                <Textarea
                    mt='2rem'
                    w='30rem'
                    color='gray.900'
                    background='gray.50'
                    placeholder='Envie-nos uma mensagem'
                    _placeholder={{color: 'gray.500'}}
                    error={errors.message}
                    {...register('message')}


                />
                <Button
                    mt='2rem'
                    w='8rem'
                    colorScheme='orange'
                    type='submit'
                    isLoading={formState.isSubmitting}
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