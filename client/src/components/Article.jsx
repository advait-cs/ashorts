import { Card, CardContent, Grid, Typography,styled } from "@mui/material";

const Image=styled(`img`)({
  height:"268px",
  width:"88%",
  objectFit:"cover",
  borderRadius:"5px" 
});

const Container = styled(CardContent) `
    display: flex;
    padding: 8px;
    padding-bottom: 4px !important;
`;

const Component=styled(Card)`
 margin-bottom:20px;
 box-shadow:0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
`
const Text=styled(Typography)`
 font-weight:300;
 font-size:22px;
 color:#44444d;
 line-height:27px
`
const RightContainer = styled(Grid)(({ theme }) => ({
  margin: '5px 0px 0 -25px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.between('sm', 'lg')]: {
      padding: '0 5px'
  },
  [theme.breakpoints.down('sm')]: {
      margin: '5px 0'
  }
}));

const Author = styled(Typography)`
    color: #808290;
    font-size: 12px;
    line-height: 22px;
`;

const Publisher = styled(Typography)`
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 10px;
    '& > *': {
        textDecoration: 'none';
        color: '#000';
        fontWeight: 900
    }
`;

const Short = styled('b')({
  color: '#44444d',
  fontFamily: "'Convergence', sans-serif"
});

const Description = styled(Typography)`
    line-height: 22px;
    color: #44444d;
    margin-top: 5px;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
`;

const Link=styled(`a`)({
  textDecoration:"none",
  color:"#000",
  fontWeight:"bold"
})


const Article=({data})=>{
  return(
    <Component>
      <Container>
        <Grid container>
          <Grid lg={5} sm={5} xs={12} item>
            <Image src={data.url} alt="" />
          </Grid>
          <RightContainer lg={7} sm={7} md={7} xs={12} item>
              <Text>{data.title}</Text>
              <Author>
                <Short>short</Short> by {data.author} / {new Date(data.timestamp).toDateString()}
              </Author>
              <Description>{data.description}</Description>
              <Publisher>read more at <Link href={data.link} target={"_blank"} rel="noopener noreferrer" >{data.publisher}</Link></Publisher>
          </RightContainer>
        </Grid>
      </Container>
    </Component>
  )
}

export default Article;