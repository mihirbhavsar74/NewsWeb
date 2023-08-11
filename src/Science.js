import { useEffect, useState } from "react";
import {Container,Card,Col,Row} from 'react-bootstrap';
function Science(){
  const [sciencedata,setScienceData]=useState([]);
  const apigetScience=()=>{
    fetch('https://inshorts.me/news/topics/science')
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      setScienceData(json.data.articles);
      
    }
    );
  };
  useEffect(()=>{
    apigetScience();
    const interval=setInterval(()=>{apigetScience();},500000);
    return ()=>clearInterval(interval)
  },[]);

  return(
    <Container fluid>
    <Row xs={1} md={3} className="g-4">
      {
        sciencedata.map(
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
export default Science;