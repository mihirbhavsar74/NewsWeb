import { useEffect, useState } from "react";
import {Container,Card,Col,Row} from 'react-bootstrap';
function Trending(){
  const [trendingdata,setTrendingData]=useState([]);
  const apigettrending=()=>{
    fetch('https://inshorts.me/news/trending?offset=0&limit=21')
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      setTrendingData(json.data.articles);
      
    }
    );
  };

  useEffect(()=>{
    apigettrending();
    const interval=setInterval(()=>{apigettrending();},500000);
    return ()=>clearInterval(interval)
  },[]);

  return(
    <Container fluid>
    <Row xs={1} md={3} className="g-4">
      {
        trendingdata.map(
          (value) => {
            return (
              <>
                <Col className='contianer-fluid mt-4'>
                  <Card>
                    <Card.Img variant="top" src={value.imageUrl} height='275px' />
                    <Card.Body>
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>
                        {value.content}
                      </Card.Text>
                    </Card.Body>
                    
                  </Card>
                </Col>
              </>
            )
          }
        )
      }
    </Row>
  </Container>
  )
}
export default Trending;