import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import snake_game from "../assets/img/snake_game.png";
import Engines from "../assets/img/Engines.png";
import Eternity from "../assets/img/Eternity.png";
import Airport from "../assets/img/Airport.png";
import Parking from "../assets/img/parking.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Eternity Spa",
      description: "Store record and marketing",
      imgUrl: Eternity,
    },
    {
      title: "Engines",
      description: "List of Engines and sounds that store, sort, and searches as need it",
       imgUrl: Engines,
    },
    {
      title: "Snake Game",
      description: "Snake games that scores and increases the speed designed to run in terminal",
       imgUrl: snake_game,
    },
      {
      title: "Airport",
      description: "C++ Program that grabs data from a CSV file, stores it on variables and writes to a file",
       imgUrl: Airport,
    },
      {
      title: "Parking Availability",
      description: "C++ Program that grabs data from a CSV file, stores it on variables and writes to a file",
       imgUrl: Parking,
    },
    
  ];

  return (
     <section className="project" id = "projects"> 
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({isVisible}) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Display of some of my projects. You can find the source code on my GitHub. Link Below</p>
                  <Tab.Container id = "project-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">tb1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">tb2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">tb3</Nav.Link>
                        </Nav.Item>
                   </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey={"first"}>
                          <Row>
                             {
                              projects.map((project, index) => {
                                return(
                                   <ProjectCard
                                    key={index}
                                     {...project}
                   
                                   />
                                )
                               })  
                             }
                          </Row>
                        </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <p>Coming up soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming up soon</p>
                    </Tab.Pane>
                   </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
 
    </section>
  )
}
 