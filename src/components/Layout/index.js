import { Container, Header, Box, HeaderForm } from './styles'
import logoFarmais from '../../assets/logo.jpg'

const Layout = () => {
    return (
        <Container>
            <Header />
            <Box>
                <HeaderForm>
                    <img src={logoFarmais} alt="Farmais Magrão" />
                    <div>
                        <h1>Atenção Farmacêutica</h1>
                        <p>Tire suas dúvidas com um farmacêutico</p>
                    </div>
                </HeaderForm>
            </Box>
        </Container>
    )
}
export default Layout
