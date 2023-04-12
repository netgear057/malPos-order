import React from "react";
import { Col, Row } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import { Box, Text } from "../../components/elements";
import PageLayout from "../../layouts/PageLayout";
import { Link } from "react-router-dom";

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
                            <Link to="/my-products" className={"child-one-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Link>
                            <Box className={"child-one-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                            <Box className={"child-one-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                          </Box>
                        </Col>
                        <Col md={3}>
                          <Box className={"child-two-box-container"}>
                            <Box className={"child-two-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                          </Box>
                        </Col>
                        <Col md={3}>
                          <Box className={"child-thr-box-container"}>
                            <Box className={"child-thr-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                            <Box className={"child-thr-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                          </Box>
                        </Col>
                        <Col md={3}>
                          <Box className={"child-one-box-container"}>
                            <Box className={"child-one-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                            <Box className={"child-one-box child-four-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                            <Box className={"child-one-box"}>
                              <h6>Table 1</h6>
                              <br />
                              <Text as="span">4</Text>
                            </Box>
                          </Box>
                        </Col>
                      </Row>
                    </Box>
                  </Box>
                </Col>
              </Row>
            </CardLayout>
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}
