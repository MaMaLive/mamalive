import {FormControl, FormLabel, FormErrorMessage, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react"
import {FieldError} from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from "react"

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, error = null, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>

            { !!label && <FormLabel mb='0' htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                name= {name}
                id = {name}
                ref={ref}
                {...rest}
            />

            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)