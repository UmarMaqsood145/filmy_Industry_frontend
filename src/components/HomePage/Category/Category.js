import React from "react";
import { Accordion } from "react-bootstrap";
import "./Category.css";

function Category() {
  return (
    <div id="category">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Bollywood Hindi Movies</Accordion.Header>
          <Accordion.Body>
            <div className="categoryItems">
              <p>All Bollywood Hindi Movies</p>
              <p>New Hindi Movies 2022</p>
              <p>Bollywood Movies 2021</p>
              <p>Bollywood Movies 2020</p>
              <p>Bollywood Movies 2019</p>
              <p>Hindi Movies 2018</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>South Hindi Dubbed Movies</Accordion.Header>
          <Accordion.Body>
            <div className="categoryItems">
              <p>All Hindi Dubbed Movies</p>
              <p>South Hindi Dubbed 2022</p>
              <p>South Movies 2021</p>
              <p>South Movies 2020</p>
              <p>South Movies 2019</p>
              <p>South Movies 2018</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Indian Punjabi Movies</Accordion.Header>
          <Accordion.Body>
            <div className="categoryItems">
              <p>All Punjabi Movies</p>
              <p>New Punjabi Movies 2022</p>
              <p>Punjabi Movies 2021</p>
              <p>Punjabi Movies 2020</p>
              <p>Punjabi Movies 2019</p>
              <p>Punjabi Movies 2018</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Hollywood Hindi Dubbed Movies</Accordion.Header>
          <Accordion.Body>
            <div className="categoryItems">
              <p>All Hollywood Movies</p>
              <p>New Hollywood Movies 2022</p>
              <p>Hollywood Movies 2021</p>
              <p>Hollywood Movies 2020</p>
              <p>Hollywood Movies 2019</p>
              <p>Hollywood Movies 2018</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Pakistani Movies</Accordion.Header>
          <Accordion.Body>
            <div className="categoryItems">
              <p>All Pakistani Movies</p>
              <p>New Pakistani Movies 2022</p>
              <p>Pakistani Movies 2021</p>
              <p>Pakistani Movies 2020</p>
              <p>Pakistani Movies 2019</p>
              <p>Pakistani Movies 2018</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Category;
