import {
  Card,
  Carousel,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

const DemoBootstrap = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/500/239?random=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/500/239?random=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/500/239?random=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Cards */}
      <Row xs={1} md={4} className="g-4 p-5">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card bg="light">
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2017/08/16/14/21/psychology-2647941_1280.jpg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Footer */}
      <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default DemoBootstrap;
