import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    padding: 0 10px;
    color: #000;
    text-decoration: none;
`;

const Header = () => {
    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <div>
                    <StyledLink to='/'>HOME</StyledLink>
                    <StyledLink to='/about'>ABOUT</StyledLink>
                    <StyledLink to='/contact'>CONTACT</StyledLink>
                </div>
                <StyledLink to='/account'>LOGOUT</StyledLink>
            </Container>
        </Component>
    )
}

export default Header;
