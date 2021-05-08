import {Flex, Icon, Box, Link, Tooltip } from '@chakra-ui/react';
import {RiWhatsappLine} from 'react-icons/ri'
export function WhatsApp() {
    return (
        <Flex
        position='fixed'
        zIndex='10'
        ml='2rem'
        top='90%'
            >
                <Link
                    href="https://api.whatsapp.com/send?phone=5544991419630"
                    isExternal
                    _focus={{border:'none'}}
                >
                    <Tooltip hasArrow  label="Estamos Online" bg="white" placement="right" color='black' ml='1rem' fontSize='20px'>

                        <Box
                        backgroundColor='#25d366'
                        borderRadius="full"
                        p='0.5rem'
                        _hover={{bgColor: '#16b14f'} 

                        }
                        >

                            <Icon
                            as={RiWhatsappLine}
                            fontSize='40px' 
                            color="white"
                            />
                        </Box>
                    </Tooltip>
                </Link>
        </Flex>
    )

}