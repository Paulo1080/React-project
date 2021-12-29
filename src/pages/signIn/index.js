import { Container, Form, Input, Button } from "./styles";


function SignIn() {
    return(
        <Container>
            <Form>
                <Input type="email" placeholder="E-mail" required></Input>
                <Input type="password" placeholder="Senha" required></Input>
                <Button>Entrar</Button>
            </Form>
            
        </Container>
    )
}

export default SignIn;