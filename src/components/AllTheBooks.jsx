import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import fantasyBooks from "../books/fantasy.json";

function AllTheBooks() {
  return (
    <Container className="my-4">
      <Row>
        {fantasyBooks.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={book.asin}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={book.img}
                alt={book.title}
                style={{ height: "300px", objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>€ {book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;