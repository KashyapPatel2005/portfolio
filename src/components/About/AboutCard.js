import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        
          <p>Hi Everyone, I am <span className="purple">Kashyap Patel </span> from <span className="purple">Ahmedabad,India</span> <br />
            I am currently pursuing B.E. in Information Technology at LD College of Engineering.

            I’m passionate about software development and enjoy building scalable and user-friendly web applications. I love working with the MERN stack, exploring modern frontend frameworks, and contributing to open source.</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Solving complex problems using Data Structures and Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kashyap </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
