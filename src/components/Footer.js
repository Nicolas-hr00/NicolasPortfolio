import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import git from "../assets/img/git.svg";
import git2 from "../assets/img/git2.svg";

import navIcon3 from "../assets/img/nav-icon3.svg";
import UNT from "../assets/img/UNT.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
           <Col size={12} sm={6}>
            <img src={UNT} alt="UNT" />
          </Col>
          <Col size={12} sm={6} className="text-center text-md-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nicolas-csce/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Nicolas-hr00"><img src={git2} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
