 import {AppBar, Toolbar, styled, Typography} from '@mui/material';

 import {Menu} from '@mui/icons-material';
 import NewspaperIcon from '@mui/icons-material/Newspaper';

 const StyleHeader= styled(AppBar)`
  background:#fff;
  height:70px
 `;

 const MenuIcon = styled(Menu)`
 color:#333
 `;
  const NewsIcon = styled(NewspaperIcon)`
  color:#f44336;
  margin-left:650px;
  `;
 
 
 const Header = () =>{
  return (
    <StyleHeader>
      <Toolbar>
        <MenuIcon/>
        <NewsIcon sx={{ fontSize: 35 }}/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="black">
            ashorts
        </Typography>
      </Toolbar>
    </StyleHeader>
  )
}

export default Header;