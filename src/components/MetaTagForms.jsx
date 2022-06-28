import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const MetaTagForms = ({ metaTagCollection, setMetaTagCollection }) => {
  const handleInputChange = (name, value) => {
    let newTags = { ...metaTagCollection };
    console.log(newTags);
    newTags[name] = value;
  };
  return (
    <Form>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Name or Page Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a Website or Title"
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter a Website URL"
              onChange={(e) => handleInputChange("url", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Meta Descriptions</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Enter a Website Meta Descriptions"
              onChange={(e) =>
                handleInputChange("descriptions", e.target.value)
              }
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Meta Keywords</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Enter a Website Keywords. eg. photography"
              onChange={(e) => handleInputChange("keyword", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Logo URL:</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Logo URL. eg. https://example.com/logo/png"
              onChange={(e) => handleInputChange("logoURL", e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Author:</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter Author Name. eg. John"
              onChange={(e) => handleInputChange("author", e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default MetaTagForms;
