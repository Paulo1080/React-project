import { useState } from "react";
import { Container, Form, Input, Button } from "./styles";
import api from '../../services/api';
import SigninValidation from "../../utils/validation/SigninValidation";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function HandleSubmit() {
        const data = { email, password };

        let validation = await SigninValidation(data);

        if(validation){
            await api.post('/user', data)
        .then( response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        }else {
            alert("Preencha um email válido e uma senha de no mínimo 6 caracteres!!")
        }

        
    }

    return(
        <Container>
            <Form>
                <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required></Input>
                <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value) } required></Input>
                <Button onClick={HandleSubmit}>Entrar</Button>
            </Form>
            
        </Container>
    )
}

export default SignIn;