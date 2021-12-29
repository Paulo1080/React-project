import {Link} from 'react-router-dom';
import  { Container } from './styles';

function Home() {
    return(
        <Container>
            
            <Link to="/signin">Ir para a página de Login</Link>
        </Container>
    )
}

export default Home;