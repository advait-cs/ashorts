import {Box, styled} from '@mui/material';
import Header from "./components/Header";
import Articles from './components/Articles';
import './index.css';

const Container= styled(Box)`
 width:60%;
 margin:120px auto 0 auto;
`

function App() {
  return (
    <Box>
   <Header/>
   <Container>
     <Articles/>
    </Container>
    </Box>
   
  );
}

export default App;
