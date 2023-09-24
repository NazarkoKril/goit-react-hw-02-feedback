import styled from "@emotion/styled";

export const ButtonList = styled.ul`
    display: flex;
    gap: 1rem;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;
    padding: 0.5rem;

    border: none;
    border-radius: 1rem;

    cursor: pointer;

    background-color: ${({id}) => {
    switch (id) {
        case "good":
            return 'green';
        case "neutral":
            return 'yellow';
        case "bad":
            return 'red';
        default:
            return 'grey';
        }
    }}
`