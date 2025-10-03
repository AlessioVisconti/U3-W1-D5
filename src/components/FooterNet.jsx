import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function FooterNet() {
  return (
    <footer className="mt-5">
      <Container>
        <Row className=" mb-3">
          <Col xs="auto">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <Col>
            <div className="footer-links">
              <p>
                <a href="#">Audio and Subtitles</a>
              </p>
              <p>
                <a href="#">Media Center</a>
              </p>
              <p>
                <a href="#">Privacy</a>
              </p>
              <p>
                <a href="#">Contact us</a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#">Audio Description</a>
              </p>
              <p>
                <a href="#">Investor Relations</a>
              </p>
              <p>
                <a href="#">Legal Notices</a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#">Help Center</a>
              </p>
              <p>
                <a href="#">Jobs</a>
              </p>
              <p>
                <a href="#">Cookie Preferences</a>
              </p>
            </div>
          </Col>
          <Col>
            <div className="footer-links">
              <p>
                <a href="#">Gift Cards</a>
              </p>
              <p>
                <a href="#">Terms of Use</a>
              </p>
              <p>
                <a href="#">Corporate Information</a>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="auto">
            <Button style={{ backgroundColor: "#221f1f" }} size="sm" className="rounded-0 footer-button">
              Service Code
            </Button>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="copyright text-muted">© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterNet;
