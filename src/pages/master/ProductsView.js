import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import ProductCard from "../../components/cards/ProductCard";
import { Box, Input, Label, List } from "../../components/elements";
import { LabelField } from "../../components/fields";
import PageLayout from "../../layouts/PageLayout";
import { Text } from "../../components/elements";
import { Fontawesome } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../layouts/Sidebar";
export default function ProductsView() {
  const [show, setShow] = useState(false);
  const [showCate, setShowCat] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseCat = () => setShowCat(false);
  const handleShowCat = () => setShowCat(true);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleClosePayment = () => setShowPayment(false);
  const handleShowPayment = () => setShowPayment(true);
  const handleCloseInvoice = () => setShowInvoice(false);
  const handleShowInvoice = () => setShowInvoice(true);
  const myList = [
    { name: "Lasgana 220 Kg", qty: 2, subtotal: 10 },
    { name: "Large Pizza", qty: 1, subtotal: 5 },
    { name: "250 ml Coke", qty: 3, subtotal: 15 },
  ];

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
                <Sidebar />
              </Col>
              <Col md={2} className={"product-checkout-sidebar"}>
                <Row>
                  <Col md={12}>
                    <CardLayout>
                      <h5>
                        Inside <span>Table</span> 3
                      </h5>
                    </CardLayout>
                  </Col>
                  <Col md={12} className={"mt-10"}>
                    <CardLayout className={"pl-7"}>
                      <Box className={"product-card-details-wrapper"}>
                        <Box className={"product-card-details"}>
                          <Box>
                            <Text as="span"> Arabian salad</Text>
                          </Box>
                          <Box>+{/* <Fontawesome icon={faPlus}/> */}</Box>
                        </Box>
                        <Text as={"span"}>Price : 23$</Text>
                        <Box className={"product-card-details"}>
                          <Box>Arabian salad</Box>
                          <Box>+{/* <Fontawesome icon={faPlus}/> */}</Box>
                        </Box>
                      </Box>
                    </CardLayout>
                  </Col>
                  <Col md={12}>
                    <CardLayout className={"pl-7"}>
                      <Box className={"f-13"}>
                        <Text className={"f-15 f-bold"} as={"span"}>
                          Sub Total
                        </Text>{" "}
                        : 4234 $<br />
                        <Text className={"f-15"} as={"span"}>
                          Total
                        </Text>{" "}
                        : 43223$
                      </Box>
                    </CardLayout>
                  </Col>
                  <Col md={12}>
                    <Button onClick={handleShowPayment} className="w-100">
                      {" "}
                      Check out
                    </Button>
                    <Modal
                      className="payment-checkout-model"
                      show={showPayment}
                      onHide={handleClosePayment}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Payment</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row>
                          <Col md={6}>
                            <LabelField
                              type={"text"}
                              placeholder={"Cash"}
                              label={"Payment method"}
                            />
                            <Label className={"bold cus-mt-5"}>Total</Label>
                            <h2 className="bold payment-total-h2 cus-mt-5">
                              $346.2
                            </h2>
                          </Col>
                          <Col md={6}>
                            <LabelField
                              type={"number"}
                              placeholder={"Received amount"}
                              label={"Received amount"}
                            />
                            <Label className={"bold cus-mt-5"}>Change</Label>
                            <h2 className="bold payment-total-h2 green cus-mt-5">
                              $0.0
                            </h2>
                            <Label className={"bold cus-mt-5"}>Remaining</Label>
                            <h2 className="bold payment-total-h2 red cus-mt-5">
                              $55.0
                            </h2>
                          </Col>
                        </Row>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={handleShowInvoice}>
                          Checkout
                        </Button>
                        <Modal
                          className="product-invoice-model"
                          show={showInvoice}
                          onHide={handleCloseInvoice}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Malpos Invoive</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Row>
                              <Text className={"text-end f-13"} as={"span"}>
                                Date : 18 june 2023 12:02 am
                              </Text>
                            </Row>
                            <br />
                            <Row>
                              <Label className={"cus-mt-5 f-13"}>
                                Area : inside
                              </Label>
                              <Label className={"cus-mt-5 f-13"}>
                                Table : Table 5
                              </Label>
                            </Row>
                            <Row className="cus-mt-5">
                              <Col md={7}>
                                <Label className={"bold"}>Item</Label>
                                <List>
                                  {myList.map((item, index) => (
                                    <li className="f-13" key={index}>
                                      {item.name}
                                    </li>
                                  ))}
                                </List>
                              </Col>
                              <Col md={2}>
                                <Label className={"bold"}>Qty</Label>
                                <List>
                                  {myList.map((item, index) => (
                                    <li className="f-13" key={index}>
                                      {item.qty}
                                    </li>
                                  ))}
                                </List>
                                <Label className={"bold f-13"}>
                                  Tax Include
                                </Label>
                              </Col>
                              <Col md={3}>
                                <Label className={"bold"}>Subtotal</Label>
                                <List>
                                  {myList.map((item, index) => (
                                    <li className="f-13" key={index}>
                                      {item.subtotal}
                                    </li>
                                  ))}
                                </List>
                                <Label className={"bold f-13"}>34.43 $</Label>
                              </Col>
                              <Col md={12}>
                                <CardLayout>
                                  <Box className={"total-bill-invoive"}>
                                    <Box>
                                      <Label className={"bold "}>Total</Label>
                                    </Box>
                                    <Box>
                                      <Label className={"bold f-13"}>
                                        34.34 $
                                      </Label>
                                    </Box>
                                  </Box>
                                </CardLayout>
                              </Col>
                            </Row>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={handleCloseInvoice}
                            >
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              onClick={handleCloseInvoice}
                            >
                              Print
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Col>
              <Col md={9}>
                <CardLayout>
                  <Row>
                    <Col md={8}>
                      <LabelField
                        fieldSize={"w100"}
                        type={"search"}
                        placeholder={"Search product"}
                      />
                    </Col>
                    <Col md={4}>
                      <Box className={"search-btn-box"}>
                        <Button onClick={handleShowCat} className="a">
                          Seach
                        </Button>
                        <Modal
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
                        </Modal>
                      </Box>
                    </Col>
                    <h3>Salads</h3>

                    <Col md={12}>
                      <Row>
                        <Col md={4}>
                          <div onClick={handleShow}>
                            <ProductCard
                              buttonTitle={"Buy Now"}
                              cardTitle={"Capcicum Salads(245kg) "}
                              Imgsrc={"images/product/single/salad.jpg"}
                            />
                          </div>
                          <Modal
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
                          </Modal>
                        </Col>
                        <Col md={4}>
                          <div onClick={handleShowAdd}>
                            <ProductCard
                              buttonTitle={"Buy Now"}
                              cardTitle={"Capcicum Salads(245kg) "}
                              Imgsrc={"images/product/single/salad.jpg"}
                            />
                          </div>
                          <Modal
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
                          </Modal>
                        </Col>{" "}
                        <Col md={4}>
                          <ProductCard
                            buttonTitle={"Buy Now"}
                            cardTitle={"Capcicum Salads(245kg) "}
                            Imgsrc={"images/product/single/salad.jpg"}
                          />
                        </Col>{" "}
                        <Col md={4}>
                          <ProductCard
                            buttonTitle={"Buy Now"}
                            cardTitle={"Capcicum Salads(245kg) "}
                            Imgsrc={"images/product/single/salad.jpg"}
                          />
                        </Col>{" "}
                        <Col md={4}>
                          <ProductCard
                            buttonTitle={"Buy Now"}
                            cardTitle={"Capcicum Salads(245kg) "}
                            Imgsrc={"images/product/single/salad.jpg"}
                          />
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
