import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./LeftNav.css";
import { useStoreContext } from "../../utils/GlobalState"
import { NEW_FILTER } from "../../utils/actions"

function LeftNav() {
  const [state, dispatch] = useStoreContext();
  const [filterObject, setFilterObject] = useState({})

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    setFilterObject({ ...filterObject, [name]: value })
    dispatch({ 
      type: NEW_FILTER,
      filter: filterObject
    });
    let { filter } = state;
    console.log(filter)
  }


  /* This defines the actual bar going down the screen */
  let StyledSideNav = {
    zIndex: "1",
    backgroundColor: "#034169",
    overflow: "hidden",
    height: "100vh",
    paddingTop: "10px",
    boxShadow: "4px 4px 4px 4px #00000080",
    position: "sticky",
    margin: "0px",
    marginRight: "20px",
  };

  let style = {
    backgroundColor: "#461767",
    color: "#675682",
    border: "0px",
    borderRadius: "10px",
  };

  return (
    <Col xs={12} md={4} lg={3} style={StyledSideNav}>
      <div className="create-heading">choose your topics below:</div>
      <Form>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="mb-3 choices">
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check 
                label="Sports"
                name="Sports"  
                type={type} 
                id={`default-${type}`} 
                onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Politics"
                  name="Politics"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check 
                label="Art" 
                name="Art"
                type={type} 
                id={`default-${type}`} 
                onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Fashion"
                  name="Fashion"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Technology"
                  name="Technology"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Animals"
                  name="Animals"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
            </Row>
            <Row className="rad-row">
              <Col md={4} className="choices-col">
                <Form.Check
                  label="Home Decor"
                  name="Home Decor"
                  type={type}
                  id={`default-${type}`}
                  onChange={handleRadioChange}
                />
              </Col>
              <Col md={4} className="choices-col">
                <Form.Check 
                label="Music" 
                name="Music"
                type={type} 
                id={`default-${type}`} 
                onChange={handleRadioChange}
                />
              </Col>
            </Row>
          </div>
        ))}
        <br />
        <Button className="apply-btn" style={style}>
          Apply
        </Button>
      </Form>
    </Col>
  );
}

export default LeftNav;
