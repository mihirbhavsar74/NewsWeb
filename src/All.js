import { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


function All() {
  const [mydata, setData] = useState([]);

  const apiget = () => {
    fetch('https://inshorts.me/news/all?offset=0&limit=21')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.articles)

      }
      );
  };

  useEffect(() => {
    apiget();
    const interval = setInterval(() => { apiget(); }, 500000);
    return () => clearInterval(interval)
  }, []);

  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {
          mydata.map(
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
export default All;