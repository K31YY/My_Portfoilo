import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/thirt.png";
import emotion from "../../Assets/Projects/product-managment.png";
import editor from "../../Assets/Projects/login-form.png";
import chatify from "../../Assets/Projects/oderfoood.png";
import suicide from "../../Assets/Projects/productcp.png";
import bitsOfCode from "../../Assets/Projects/compuer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FOOD ORDER CARD"
              description=""
              ghLink="https://github.com/K31YY"
              demoLink="https://chatify-49.keiyy.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="COMPUTERSHOP"
              description=""
              ghLink="https://github.com/K31YY"
              demoLink="https://blogs.keiyy.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LOGIN ANIMATION"
              description=""
              ghLink="https://github.com/K31YY"
              demoLink="https://editor.keiyy.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
