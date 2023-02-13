import { ButtonContainer } from "./styles"

interface ButtonProps {
    Content: string;
}

export function Button({Content}:ButtonProps) {
    return (
        <ButtonContainer>{Content}</ButtonContainer>
    )
}