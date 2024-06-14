import { AppBar, Toolbar, styled, Button, Select, MenuItem, Box, Typography } from '@mui/material'; 
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { categories } from '../../constants/data'; // Assuming categories are exported from this file

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

const Footer = styled(Box)`
    background-color: #333;
    padding: 2px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
`;

const CopyrightText = styled(Typography)`
    color: #FB641B;
`;

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = new URLSearchParams(location.search).get('category') || '';

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        navigate(`/?category=${selectedCategory}`);
    }
    
    const logout = async () => navigate('/account');

    return (
        <>
            <Component>
                <Container>
                    <div>
                        <StyledNavLink to='/' exact activeClassName="active">HOME</StyledNavLink>
                        <StyledNavLink to='/about' activeClassName="active">ABOUT</StyledNavLink>
                        <StyledNavLink to='/contact' activeClassName="active">CONTACT</StyledNavLink>
                    </div>
                    <div>
                        <Select
                            value={category}
                            onChange={handleCategoryChange}
                            displayEmpty
                            style={{ marginRight: '20px' }}
                        >
                            <MenuItem value="">
                                All Categories
                            </MenuItem>
                            {
                                categories.map(category => (
                                    <MenuItem key={category.id} value={category.type}>
                                        {category.type}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        <Button onClick={logout}>LOGOUT</Button>
                    </div>
                </Container>
            </Component>
            <Footer>
                <Typography variant="h4" style={{ color: '#FB641B' }}>
                    <CopyrightText>
                        &copy; The Voice Canvas
                    </CopyrightText>
                </Typography>
            </Footer>
        </>
    )
}

export default Header;
