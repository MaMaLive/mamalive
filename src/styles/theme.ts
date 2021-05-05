import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        yellow: {
            "500": "#Fcaa39",
        },
        blue: {
            "800": "#282750",
        }
    },
    fonts: {
        heading: 'Bungee',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.500'
            }
        }
    }
})