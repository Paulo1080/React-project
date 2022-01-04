import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import Lottie from 'react-lottie';

import { 
    Container, 
    Form, 
    Input, 
    Button,
    Image
} from "./styles";
import api from '../../services/api';
import SigninValidation from "../../utils/validation/SigninValidation";
import Message from '../../components/Message'

import * as animationData from '../../assets/animations/9953-loading-round.json'
import Logo from '../../assets/images/logo.png'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    async function HandleSubmit() {
        setLoading(true);
        const data = { email, password };

        let validation = await SigninValidation(data);

        if(validation){
            await api.post('/user', data)
        .then( response => {
            Message(response);
            setLoading(false);
        })
        .catch(error => {
            Message("Erro ao tantar fazer login");
            setLoading(false);
        })
        }else {
            Message("Preencha um email válido e uma senha de no mínimo 6 caracteres!!", "error")
            setLoading(false);
        }

        
    }

    return(
        <Container>
            <Form>
                <ToastContainer/>
                <Image src={Logo} alt="Logo Genérico" />
                <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required></Input>
                <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value) } required></Input>
                <Button 
                    onClick={HandleSubmit}
                >
                    { loading ?
                            <Lottie options={ defaultOptions }
                                height = {40}
                                width = {40}
                                
                            />
                        :

                            "Entrar"
                        }
                </Button>
            </Form>            
        </Container>
    )
}

export default SignIn;