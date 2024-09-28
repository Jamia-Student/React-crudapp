
import {AppBar,Toolbar,Typography} from '@mui/material'; 
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#111111',
  }));

const StyledTypography = styled(NavLink)(({theme}) => ({
    marginRight: '10px',
    color: 'inherit',
    textDecoration: 'None',
  }));

const NavBar = () =>{
    return (
       <StyledAppBar position = 'static'>
        <Toolbar>
            <StyledTypography to = "/">CodeforInterview</StyledTypography>
            <StyledTypography to = "/add">AddUsers</StyledTypography>
            <StyledTypography to = "/all">AllUsers</StyledTypography>
        </Toolbar>
       </StyledAppBar>
    )
}

export default NavBar;