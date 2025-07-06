import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import proconnect from "../../Assets/Projects/PRO_CONNECT.png";
import elevatelab from "../../Assets/Projects/elevate-lab.png";
import suicide from "../../Assets/Projects/suicide.png";
import zoom from "../../Assets/Projects/zoomX.png";

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
              imgPath={elevatelab}
              title="elevate-labs"
              description="An Angular-based web application designed to empower aspiring entrepreneurs and startups by offering instant idea validation and market insights. The platform streamlines early-stage business planning by providing financial projections, risk analysis, and actionable strategies for faster execution. It also features an AI-powered logo generator to help build a professional brand identity from day one."
              ghLink="https://github.com/KashyapPatel2005/elevate-lab"
              demoLink="https://elevate-labs.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zoom}
              title="zoomX"
              description="Developed a real-time video conferencing platform where users can schedule meetings and share a uniquemeeting code.Integrated WebRTC and Socket.IO for seamless live video streaming and real-time chat communication. Implemented secure meeting access, ensuring privacy and reliability for virtual meetings, online classes, andteam collaborations."
              ghLink="https://github.com/KashyapPatel2005/zoomX"
              demoLink="https://zoomx-c1lc.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proconnect}
              title="PRO-CONNECT"
              description="Developed a professional networking platform similar to LinkedIn, enabling users to authenticate, managemanage profile, update profile, download resume.Implemented features like sending and accepting connection requests, posting updates, liking posts, andengaging in professional networking"
              ghLink="https://github.com/KashyapPatel2005/ProConnect"
              demoLink="https://proconnect-0rfl.onrender.com/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="cv_maestro.ai"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink="https://cvmaestroai.000.pe"
            />
          </Col> */}

       

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
