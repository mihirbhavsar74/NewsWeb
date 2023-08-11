import React, { useState,useEffect } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
function Top(){
  const[topdata,setTopData]=useState([]);

  const apiget2=()=>{
    fetch('https://inshorts.me/news/top?offset=0&limit=21')
    .then((response)=>response.json())
    .then((json)=>{
      console.log(json);
      setTopData(json.data.articles);
      
    }
    );
  };

  useEffect(()=>{
    apiget2();
    const interval=setInterval(()=>{apiget2();},500000);
    return ()=>clearInterval(interval)
  },[]);

  return(
    
    <Container fluid>
      <Row xs={1} md={3} className='g-4'>
       {
        topdata.map(
          (value)=>{
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

export default Top;