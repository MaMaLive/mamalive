import {Flex, Icon, Box} from '@chakra-ui/react';
import {RiWhatsappLine} from 'react-icons/ri'
export function WhatsApp() {
    return (
        <Flex
        position='fixed'
        ml='2rem'
        top='90%'
            >
                <Box
                backgroundColor='#25d366'
                borderRadius="full"
                p='0.5rem'
                >

                    <Icon
                    as={RiWhatsappLine}
                    fontSize='40px' 
                    color="white"
                    />
                </Box>
        </Flex>
    )

}