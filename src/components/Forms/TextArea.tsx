import {FormControl, FormLabel, FormErrorMessage, Textarea as ChakraTextarea, TextareaProps as ChakraTextareaProps} from "@chakra-ui/react"
import {FieldError} from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from "react"

interface TextareaProps extends ChakraTextareaProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = ({name, label, error, ...rest}, ref) => {
    return (
        <FormControl isInvalid={!!error}>

            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraTextarea
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

export const Textarea = forwardRef(TextareaBase)