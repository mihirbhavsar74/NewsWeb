import { useEffect, useState } from "react";
import {Container,Card,Col,Row} from 'react-bootstrap';
function Sports(){
  const [sportsdata,setsportsData]=useState([]);
  const apigetSports=()=>{
    fetch('https://inshorts.me/news/topics/sports')
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      setsportsData(json.data.articles);
      
    }
    );
  };
  useEffect(()=>{
    apigetSports();
    const interval=setInterval(()=>{apigetSports();},500000);
    return ()=>clearInterval(interval)
  },[]);

  return(
    <Container fluid>
    <Row xs={1} md={3} className="g-4">
      {
        sportsdata.map(
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
export default Sports;