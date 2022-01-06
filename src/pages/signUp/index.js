import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import Lottie from 'react-lottie';

import {
    Container,
    Form,
    Input,
    Button,
    Image,
    Animation,
    Signup,
    Span,
    ForgotPassword,
    Title
} from "./styles";
import api from '../../services/api';
import SignUpValidation from "../../utils/validation/SignUpValidation";
import Message from '../../components/Message'

import * as animationData from '../../assets/animations/loading.json'
import Logo from '../../assets/images/logo.png'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

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
        const data = { name, email, phone, password };

        try {
            let validation = await SignUpValidation(data);

            await api.post('/signup', data)
            .then( response => {
                Message(response.data.message);
                setTimeout(() => {
                    setLoading(false);
                    setSuccess(true);
                }, 2000)
            })
            .catch(error => {
                Message("Erro ao tantar fazer login");
                setTimeout(()=>{
                    setLoading(false);
                }, 2000);
            })

        } catch (err) {
            Message(err.errors[0]);
            setLoading(false);
        }

        /*
        if(validation){
            await api.post('/signup', data)
        .then( response => {
            Message(response.data.message);
            setTimeout(()=>{
                setLoading(false);
                setSuccess(true);
            }, 2000);
        })
        .catch(error => {
            Message("Erro ao tantar fazer login");
            setTimeout(()=>{
                setLoading(false);
            }, 2000);
        })
        }else {
            Message("Preencha um email válido e uma senha de no mínimo 6 caracteres!!")
            setTimeout(()=>{
                setLoading(false);
            }, 2000);
                
        }
        */

    }

    async function handleAuthenticated() {
        let token = await localStorage.getItem("over_token");

        if (token) {
            window.location = "/";
        }
    }

    useEffect(() => {
        handleAuthenticated()
    }, [])

    return (
        <Container>
            {


                success ?

                    <h1>Deu certo</h1>

                    :

                    <Form>
                        <ToastContainer />
                        <Image
                            src={Logo}
                            alt="Logo Genérico"
                        />
                        <Title>Cadastre-se!</Title>
                        <Input
                            type="text"
                            placeholder="Nome"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            type="email"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type="number"
                            placeholder="Celular"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <ForgotPassword href="/forgot-password">
                            Esqueceu sua senha?
                        </ForgotPassword>
                        <Button
                            onClick={HandleSubmit}
                        >
                            {loading ?
                                <Animation>
                                    <Lottie options={defaultOptions} />
                                </Animation>
                                :

                                "Entrar"
                            }
                        </Button>
                        <Signup href="/signup">Ainda não tem cadastro? <Span>Cadastra-se</Span></Signup>
                    </Form>
            }
        </Container>
    )
}
export default SignUp;