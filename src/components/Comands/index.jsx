"use client";
import { Col, Row } from "react-bootstrap";

export default function Comands({ comand, windows, mac }) {
  return (
    <Row className="g-1">
      <Col xs="5">
        <span className="f-12px">{comand}</span>
      </Col>
      <Col xs className="text-center">
        <span className="f-12px">{windows}</span>
      </Col>
      <Col xs className="text-center">
        <span className="f-12px">{mac}</span>
      </Col>
    </Row>
  );
}
