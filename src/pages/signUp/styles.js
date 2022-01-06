import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;

export const Form =styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    @media (max-width: 1000px) {
        width: 50%;
    }
    @media (max-width: 600px) {
        width: 70%;
    }

`;

export const Input =styled.input`
    border-radius: var(--border-radius);
    font-size: 18px;
    max-width: 100%;
    padding: 15px 20px ;
    margin-bottom: 20px;
    border: 2px solid var(--color-primary);  
    color: var(--color-gray);
    background-color: var(--color-background);

`;

export const Button =styled.button`
    border-radius: var(--border-radius);
    font-size: 18px;
    width: 100%;
    padding: 15px 20px;
    font-weight: 700;
    background: var(--color-gradient);
    border: none;
    color: var(--color-white);
    cursor: pointer ;


    &:hover {
        background: var(--color-gradient-hover);
    }

`;

export const Image = styled.img `
    width: 100px;
    margin: 30px auto;
    cursor: pointer;
    
    

`;

export const Animation = styled.div`
    width: 37%;
    height: 34px;
    margin: auto;
`
export const Signup = styled.a`
    margin: 20px auto;
    text-align: center;
    max-width: 200px;
    color: var(--color-primary);
    cursor: pointer;
    text-decoration: none;
    line-height: 25px;
`

export const Span = styled.span`
    
    color: var(--color-white);
    text-decoration: underline;
`

export const ForgotPassword = styled.a`
    
    color: var(--color-primary);
    cursor: pointer;
    text-decoration: none;
    line-height: 25px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;

`

export const Title = styled.h1`
    color: var(--color-white);
    margin-bottom: 30px;
    font-size: 24px;
    font-size: 400;
    text-align: center;

`