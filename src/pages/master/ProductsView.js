import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import ProductCard from "../../components/cards/ProductCard";
import { Box, Input, Label, List } from "../../components/elements";
import { LabelField } from "../../components/fields";
import PageLayout from "../../layouts/PageLayout";
import { Text } from "../../components/elements";
import { Fontawesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faB,
  faBars,
  faClock,
  faEdit,
  faGear,
  faHome,
  faPlus,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../layouts/Sidebar";
import ImageCards from "../../components/cards/ImageCards";
import ProductViewReceipt from "./ProductViewReceipt";
import { MultipleMenu } from "../../components/sidebar";
import data from "../../data/master/sidebar.json";
import { Link } from "react-router-dom";

export default function ProductsView() {
  const [show, setShow] = useState(false);
  const [showCate, setShowCat] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  //   const handleCloseCat = () => setShowCat(false);
  //   const handleShowCat = () => setShowCat(true);
  //   const handleCloseAdd = () => setShowAdd(false);
  //   const handleShowAdd = () => setShowAdd(true);
  //   const handleClosePayment = () => setShowPayment(false);
  //   const handleShowPayment = () => setShowPayment(true);
  //   const handleCloseInvoice = () => setShowInvoice(false);
  //   const handleShowInvoice = () => setShowInvoice(true);
  //   const myList = [
  //     { name: "Lasgana 220 Kg", qty: 2, subtotal: 10 },
  //     { name: "Large Pizza", qty: 1, subtotal: 5 },
  //     { name: "250 ml Coke", qty: 3, subtotal: 15 },
  //   ];

  return (
    <div>
      <PageLayout>
        <Row>
          {/* <Col md={12}>
                        <CardLayout>
                        <h3>My Products</h3>
                        </CardLayout>
                    </Col> */}
          <Col md={12}>
            <Row>
              <Col md={1}>
                <CardLayout>
                  <Sidebar />
                  {/* <MultipleMenu data={data?.navs} /> */}
                </CardLayout>
              </Col>
              <Col md={4}>
                <Row>
                  <ProductViewReceipt />
                </Row>
              </Col>
              <Col md={7}>
                <CardLayout>
                  <Row>
                    <Col md={7}>
                      <Button className={"logo-btn-p"}>
                        <FontAwesomeIcon icon={faHome} />
                      </Button>
                    </Col>
                    <Col md={5}>
                      <Box className={"search-btn-box"}>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faBars} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faGear} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faStar} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faB} />
                        </Button>
                        {/* <Modal
                          className={"search-category-model"}
                          show={showCate}
                          onHide={handleCloseCat}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Categories</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Row>
                              <button className="cus-btn">Salads</button>
                              <button className="cus-btn">Pizza</button>
                              <button className="cus-btn">
                                Pasta & Ristto
                              </button>
                              <button className="cus-btn">Lasgana</button>
                            </Row>
                          </Modal.Body>
                          <Modal.Footer></Modal.Footer>
                        </Modal> */}
                      </Box>
                    </Col>
                    <h3>Salads</h3>

                    <Col md={12}>
                      <Row>
                        <Col md={3}>
                          <Link to="/product-details">
                            <div>
                              <ImageCards
                                Imgsrc={"images/product/single/salad.jpg"}
                                productTitle="Expresso lasgana"
                              />
                            </div>
                          </Link>
                          {/* <Modal
                            className={"search-product-model"}
                            show={show}
                            onHide={handleClose}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Napoli Lasaga (230g)</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Row>
                                <Col md={5}>
                                  <Box className={"search-product-model"}>
                                    <img
                                      src="images/product/single/salad.jpg"
                                      alt="img"
                                    />
                                  </Box>
                                </Col>
                                <Col md={6}>
                                  <Text as={"span"}>$11.23</Text>
                                  <br />
                                  <Text className={"f-13"} as={"span"}>
                                    Chicken fillet, cream (animal), corn,
                                    cheese, sabalii{" "}
                                  </Text>
                                  <Box className={"cus-mt-5"}>
                                    <LabelField
                                      type={"number"}
                                      placeholder={"0"}
                                      label={"Quantity"}
                                    />
                                  </Box>
                                  <Box className={"cus-mt-5"}>
                                    <Button
                                      variant="primary"
                                      onClick={handleClose}
                                    >
                                      Add to Cart
                                    </Button>
                                  </Box>
                                </Col>
                              </Row>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button variant="primary" onClick={handleClose}>
                                Save Changes
                              </Button>
                            </Modal.Footer>
                          </Modal> */}
                        </Col>
                        <Col md={3}>
                          <Link to="/product-details">
                            <div>
                              <ImageCards
                                Imgsrc={"images/product/single/salad.jpg"}
                                productTitle="Expresso lasgana"
                              />
                            </div>
                          </Link>
                          {/* <Modal
                            className={"search-product-model"}
                            show={showAdd}
                            onHide={handleCloseAdd}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Napoli (230g)</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Row>
                                <Col md={5}>
                                  <Box className={"search-product-model"}>
                                    <img
                                      src="images/product/single/salad.jpg"
                                      alt="img"
                                    />
                                  </Box>
                                </Col>
                                <Col md={6}>
                                  <Text className={"bold"} as={"span"}>
                                    $11.23
                                  </Text>
                                  <br />
                                  <Text className={"f-13"} as={"span"}>
                                    Chicken fillet, cream (animal), corn,
                                    cheese, sabalii{" "}
                                  </Text>
                                  <Box className={"cus-mt-5"}>
                                    <Label className={"bold"}>
                                      Select your option
                                    </Label>
                                  </Box>
                                  <Box className={"cus-mt-5"}>
                                    <Label className={"bold"}>Size</Label>
                                  </Box>
                                  <Box className={"cus-mt-5"}>
                                    <Row>
                                      <Col md={4}>
                                        <Box className={`select-options`}>
                                          <Label>
                                            <Input type={"checkbox"} />
                                            <Text as={"span"}>
                                              {" "}
                                              &nbsp;Small
                                            </Text>
                                          </Label>
                                        </Box>
                                      </Col>
                                      <Col md={4}>
                                        <Box className={`select-options`}>
                                          <Label>
                                            <Input type={"checkbox"} />
                                            <Text as={"span"}>
                                              {" "}
                                              &nbsp;Medium
                                            </Text>
                                          </Label>
                                        </Box>
                                      </Col>
                                      <Col md={4}>
                                        <Box className={`select-options`}>
                                          <Label>
                                            <Input type={"checkbox"} />
                                            <Text as={"span"}>
                                              {" "}
                                              &nbsp;Large
                                            </Text>
                                          </Label>
                                        </Box>
                                      </Col>
                                      <Col md={12}>
                                        <Box className={`select-options`}>
                                          <Label>
                                            <Input type={"checkbox"} />
                                            <Text as={"span"}>
                                              {" "}
                                              &nbsp;Fammily
                                            </Text>
                                          </Label>
                                        </Box>
                                      </Col>
                                      <Box className={"cus-mt-5"}>
                                        <Label className={"bold"}>Crust</Label>
                                      </Box>
                                      <Col md={6}>
                                        <Box className={`select-options`}>
                                          <Label>
                                            <Input type={"checkbox"} />
                                            <Text as={"span"}>
                                              {" "}
                                              &nbsp;Hand-Tosset
                                            </Text>
                                          </Label>
                                        </Box>
                                      </Col>
                                      <Col md={6}>
                                        <Box className={`select-options`}>
                                          <Label>
                                            <Input type={"checkbox"} />
                                            <Text as={"span"}>
                                              {" "}
                                              &nbsp;Thin-Crust
                                            </Text>
                                          </Label>
                                        </Box>
                                      </Col>
                                      <Col md={12}>
                                        <Box className={`select-options`}>
                                          <Label>
                                            <Input type={"checkbox"} />
                                            <Text as={"span"}>
                                              {" "}
                                              &nbsp;Double Decker
                                            </Text>
                                          </Label>
                                        </Box>
                                      </Col>
                                      <Box className={"cus-mt-5"}>
                                        <Label className={"bold"}>Extras</Label>
                                      </Box>
                                      <Label className={"f-13 cus-mt-5"}>
                                        <Input type={"checkbox"} />
                                        <Text as={"span"}>
                                          {" "}
                                          &nbsp;Peporoni +3.$
                                        </Text>
                                      </Label>
                                      <Label className={"f-13 cus-mt-5"}>
                                        <Input type={"checkbox"} />
                                        <Text as={"span"}>
                                          {" "}
                                          &nbsp;Olive +4$
                                        </Text>
                                      </Label>
                                      <Label className={"f-13 cus-mt-5"}>
                                        <Input type={"checkbox"} />
                                        <Text as={"span"}>
                                          {" "}
                                          &nbsp;Mushroom +2$
                                        </Text>
                                      </Label>
                                      <LabelField
                                        type={"number"}
                                        placeholder={"0"}
                                        label={"Quantity"}
                                      />
                                    </Row>
                                  </Box>
                                </Col>
                              </Row>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleCloseAdd}
                              >
                                Close
                              </Button>
                              <Button
                                variant="primary"
                                onClick={handleCloseAdd}
                              >
                                Save Changes
                              </Button>
                            </Modal.Footer>
                          </Modal> */}
                        </Col>{" "}
                        <Col md={3}>
                          <Link to="/product-details">
                            <div>
                              <ImageCards
                                Imgsrc={"images/product/single/salad.jpg"}
                                productTitle="Expresso lasgana"
                              />
                            </div>
                          </Link>
                        </Col>{" "}
                        <Col md={3}>
                          <Link to="/product-details">
                            <div>
                              <ImageCards
                                Imgsrc={"images/product/single/salad.jpg"}
                                productTitle="Expresso lasgana"
                              />
                            </div>
                          </Link>
                        </Col>{" "}
                        <Col md={3}>
                          <Link to="/product-details">
                            <div>
                              <ImageCards
                                Imgsrc={"images/product/single/salad.jpg"}
                                productTitle="Expresso lasgana"
                              />
                            </div>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardLayout>
              </Col>
            </Row>
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}
