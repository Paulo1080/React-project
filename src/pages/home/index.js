import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import  { Container, ItemContainer } from './styles';
import CardItem from '../../components/CardItem';
import api from '../../services/api';

function Home() {
    const [item, setItem] = useState([]);

    async function handleGetItems(){
        let response = await api.get("/items");
        setItem(response.data.item.docs);
    }

    useEffect(()=>{
        handleGetItems()
    }, [])
    return(
        <Container>
            <Header />
            <ItemContainer>
                {
                    item.length ? 
                        item.map((item, index)=>(
                            <CardItem item={item} key={item}/>
                        ))
                    :
                        <p style={{color: '#fff'}}>Nenhum item encontrado</p>

                }
            </ItemContainer>
        </Container>
    )
}

export default Home;