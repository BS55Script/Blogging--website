import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
    padding: 0 10px;
    color: #000;
    text-decoration: none;

    &.active {
        color: red; /* Change color for active link */
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <div>
                    <StyledNavLink to='/' exact activeClassName="active">HOME</StyledNavLink>
                    <StyledNavLink to='/about' activeClassName="active">ABOUT</StyledNavLink>
                    <StyledNavLink to='/contact' activeClassName="active">CONTACT</StyledNavLink>
                </div>
                <StyledNavLink to='/account' activeClassName="active">LOGOUT</StyledNavLink>
            </Container>
        </Component>
    )
}

export default Header;
