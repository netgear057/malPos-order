import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardLayout } from "../../components/cards";
import { Box, Text } from "../../components/elements";
import PageLayout from "../../layouts/PageLayout";

export default function OrdersLine() {
  return (
    <div>
      <PageLayout>
        <Row>
          <Col md={12}>
            <CardLayout>
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <h3>Order Place</h3>
                </Col>
              </Row>
              <Box className={"order-line-tables-wrapper"}>
                <Box className={"order-line-tables"}>
                  <Row>
                    <Col md={3}>
                      <Box className={"child-one-box-container"}>
                        <Box className={"child-one-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Box>
                        <Link to={"/my-products"} className={"child-one-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                        <Link to={"/my-products"} className={"child-one-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                        <Link to={"/my-products"} className={"child-one-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                      </Box>
                    </Col>
                    <Col md={3}>
                      <Link
                        to={"/my-products"}
                        className={"child-two-box-container"}
                      >
                        <Box className={"child-two-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Box>
                      </Link>
                    </Col>
                    <Col md={3}>
                      <Box className={"child-thr-box-container"}>
                        <Link to={"/my-products"} className={"child-thr-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                        <Link to={"/my-products"} className={"child-thr-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                      </Box>
                    </Col>
                    <Col md={3}>
                      <Box className={"child-one-box-container"}>
                        <Link to={"/my-products"} className={"child-one-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                        <Link
                          to={"/my-products"}
                          className={"child-one-box child-four-box"}
                        >
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                        <Link to={"/my-products"} className={"child-one-box"}>
                          <h6>Table 1</h6>
                          <br />
                          <Text as="span">4</Text>
                        </Link>
                      </Box>
                    </Col>
                  </Row>
                </Box>
              </Box>
            </CardLayout>
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}
